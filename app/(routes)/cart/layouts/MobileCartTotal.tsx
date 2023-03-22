"use client"

import CheckoutButton from "@/components/CheckoutButton"
import { useCart } from "@/hooks"

export default function CartTotalMobile() {
  const { cartData, totalPrice } = useCart()

  return (
    <div className="mobile-bottom-wrapper fixed bottom-0 w-full font-sans text-xl shadow-upper-md lg:hidden">
      <div className="padding-x flex justify-between bg-skin-muted py-2">
        <span>Total Price:</span>
        <span>{totalPrice} Ks</span>
      </div>
      <CheckoutButton
        isDisabled={cartData.length < 1}
        className="!bg-opacity-100 py-4 font-medium"
        includeIcon
      />
    </div>
  )
}
