"use client"

import useMounted from "@/hooks/useMounted"
import { useWishlistStore } from "@/lib/store"

export default function WishlistTitle() {
  const mounted = useMounted()
  const { wishlist } = useWishlistStore()

  const numOfWishlist = wishlist.length > 0 ? `(${wishlist.length})` : ``
  return (
    <h1 className="text-xl font-bold md:text-2xl">
      My Wishlist {mounted && numOfWishlist}
    </h1>
  )
}
