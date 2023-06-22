"use client"

import { useMounted } from "@/hooks"
import { useWishlistStore } from "@/store/client"

export default function WishlistTitle() {
  const mounted = useMounted()
  const { wishlist } = useWishlistStore()

  const numOfWishlist = wishlist.length > 0 ? `(${wishlist.length})` : ``
  return (
    <h1 className="font-serif text-xl font-semibold md:text-2xl">
      My Wishlist {mounted && numOfWishlist}
    </h1>
  )
}
