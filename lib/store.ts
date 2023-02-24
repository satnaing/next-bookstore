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

/* ===== Cart Store ===== */
type WishlistState = {
  wishlist: number[]
  addToWishlist: (id: number) => void
  removeFromWishlist: (id: number) => void
  toggleWishlist: (id: number) => void
  updateQuantity?: (id: number, action: "increase" | "decrease") => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    set => ({
      wishlist: [],
      addToWishlist: (id: number) =>
        set(state => addWishlistItem(state.wishlist, id)),
      removeFromWishlist: (id: number) =>
        set(state => removeFromWishlistItem(state.wishlist, id)),
      toggleWishlist: (id: number) =>
        set(state => toggleWishlistItem(state.wishlist, id)),
    }),
    {
      name: "wishlist-storage",
    }
  )
)

function addWishlistItem(state: number[], id: number) {
  const wishlistArray = state.filter(item => item !== id)
  return { wishlist: [...wishlistArray, id] }
}

function removeFromWishlistItem(state: number[], id: number) {
  const wishlistArray = state.filter(item => item !== id)
  return { wishlist: [...wishlistArray] }
}

function toggleWishlistItem(state: number[], id: number) {
  const status = state.find(item => item === id)
  const wishlistArray = state.filter(item => item !== id)

  if (status) return { wishlist: [...wishlistArray] }

  return { wishlist: [...wishlistArray, id] }
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
