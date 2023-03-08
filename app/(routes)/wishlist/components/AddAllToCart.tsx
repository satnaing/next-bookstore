"use client"

import { useCartStore, useToastStore, useWishlistStore } from "@/store"

export default function AddAllToCart() {
  const { wishlist, toggleWishlist } = useWishlistStore()
  const { addToCart } = useCartStore()
  const { setToast } = useToastStore()

  const handleAddToCart = () => {
    wishlist.forEach(item => {
      addToCart({ id: item.id, quantity: 1 })
      toggleWishlist(item.id, item)
    })
    setToast({
      status: "success",
      message: "All books has been added to cart",
    })
  }
  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="w-full bg-skin-accent py-2 px-2 font-sans text-lg font-medium text-skin-base hover:bg-[#F26E5D] md:w-auto md:rounded md:py-1"
    >
      Add All To Cart
    </button>
  )
}
