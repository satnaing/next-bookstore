import { create } from "zustand"
import { persist } from "zustand/middleware"

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
