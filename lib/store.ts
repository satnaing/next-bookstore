import { create } from "zustand"
import { persist } from "zustand/middleware"

/* ===== Cart Store ===== */
type CartItem = {
  id: number
  quantity: number
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
  return { cart: [...cartArray, bookObj] }
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

/* ===== Wishlist Store ===== */
export type WishlistItem = {
  id: number
  slug: string
  image: string
  title: string
  price: number
  inStock?: boolean
}

type WishlistState = {
  wishlist: WishlistItem[]
  toggleWishlist: (id: number, item?: WishlistItem) => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    set => ({
      wishlist: [],
      toggleWishlist: (id: number, item?: WishlistItem) =>
        set(state => toggleWishlistItem(state.wishlist, id, item)),
    }),
    {
      name: "wishlist-storage",
    }
  )
)

function toggleWishlistItem(
  wishlist: WishlistItem[],
  id: number,
  item?: WishlistItem
) {
  const status = wishlist.some(wItem => wItem.id === id)
  const filteredWishlist = wishlist.filter(wItem => wItem.id !== id)

  if (status) return { wishlist: [...filteredWishlist] }

  const newWishlist = item ? [...filteredWishlist, item] : [...filteredWishlist]
  return { wishlist: newWishlist }
}

/* ===== Toast Store ===== */
type ToastObj = {
  status: "success" | "info" | "error" | "warning"
  message: string
}

type ToastState = {
  toast: boolean
  toastObj?: ToastObj
  setToast: (obj?: ToastObj) => void
}

export const useToastStore = create<ToastState>()(set => ({
  toast: false,
  toastObj: { status: "info", message: "" },
  setToast: obj => set(state => setToast(state, obj)),
}))

function setToast(state: ToastState, toastObj?: ToastObj) {
  if (!toastObj) return { toast: !state.toastObj }

  return {
    toast: !state.toast,
    toastObj,
  }
}
