"use client"

import { useCartStore, useToastStore, useWishlistStore } from "@/store/client"

export default function AddAllToCart() {
  const { wishlist, toggleWishlist } = useWishlistStore()
  const { addToCart } = useCartStore()
  const { setToast } = useToastStore()

  const handleAddToCart = () => {
    wishlist.forEach(({ id }) => {
      addToCart({ id: id, quantity: 1 })
      toggleWishlist(id)
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
      className="primary-btn-color w-full py-2 px-2 font-sans text-lg font-medium md:w-auto md:rounded md:py-1"
    >
      Add All To Cart
    </button>
  )
}
