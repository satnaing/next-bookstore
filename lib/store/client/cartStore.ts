import { create } from "zustand"
import { persist } from "zustand/middleware"

/* ===== Cart Store ===== */
type CartItem = {
  id: number
  quantity: number
  timestamp?: number
}

type CartState = {
  cart: CartItem[]
  addToCart: (bookObj: CartItem) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, action: "increase" | "decrease") => void
}

export const useCartStore = create<CartState>()(
  persist(
    set => ({
      cart: [],
      addToCart: bookObj => set(state => addCartItem(state.cart, bookObj)),
      removeFromCart: id => set(state => removeCartItem(state.cart, id)),
      updateQuantity: (id, action) =>
        set(state => updateItemQuantity(state.cart, id, action)),
    }),
    {
      name: "cart-storage",
    }
  )
)

/* ===== Cart Store Util Functions ===== */
function addCartItem(state: CartItem[], bookObj: CartItem) {
  const cartArray = state.filter(item => item.id !== bookObj.id)
  const newItem = { ...bookObj, timestamp: Date.now() }
  return { cart: [...cartArray, newItem] }
}

function removeCartItem(state: CartItem[], id: number) {
  const removedCart = state.filter(item => item.id !== id)
  return { cart: [...removedCart] }
}

function updateItemQuantity(
  state: CartItem[],
  id: number,
  action: "increase" | "decrease"
) {
  const objIndex = state.findIndex(obj => obj.id == id)

  if (action === "increase") {
    state[objIndex].quantity = state[objIndex].quantity + 1
  } else if (action === "decrease") {
    state[objIndex].quantity =
      state[objIndex].quantity - (state[objIndex].quantity > 1 ? 1 : 0)
  }

  return { cart: [...state] }
}
