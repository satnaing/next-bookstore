"use client"

import CartIcon from "@/icons/CartIcon"
import { useCart } from "@/hooks"

export default function CartTotalMobile() {
  const { totalPrice } = useCart()

  return (
    <div className="mobile-bottom-wrapper fixed bottom-0 w-full font-sans text-xl shadow-upper-md lg:hidden">
      <div className="padding-x flex justify-between bg-skin-muted py-2">
        <span>Total Price:</span>
        <span>{totalPrice} Ks</span>
      </div>
      <button
        type="button"
        className="flex w-full items-center justify-center gap-x-4 bg-skin-accent-dark py-4 text-center font-medium text-skin-base"
      >
        <CartIcon className="stroke-skin-base stroke-2" />
        Checkout
      </button>
    </div>
  )
}
