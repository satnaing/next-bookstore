import { create } from "zustand"
import { persist } from "zustand/middleware"

/* ===== Wishlist Store ===== */
export type WishlistItem = {
  id: number
  timestamp?: number
}

type WishlistState = {
  wishlist: WishlistItem[]
  toggleWishlist: (id: number) => void
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    set => ({
      wishlist: [],
      toggleWishlist: (id: number) =>
        set(state => toggleWishlistItem(state.wishlist, id)),
    }),
    {
      name: "wishlist-storage",
    }
  )
)

function toggleWishlistItem(wishlist: WishlistItem[], id: number) {
  const status = wishlist.some(wItem => wItem.id === id)
  const filteredWishlist = wishlist.filter(wItem => wItem.id !== id)

  if (status) return { wishlist: [...filteredWishlist] }

  const newWishlist = { id, timestamp: Date.now() }
  return { wishlist: [...filteredWishlist, newWishlist] }
}
