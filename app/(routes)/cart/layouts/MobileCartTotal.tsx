"use client"

import Link from "next/link"
import CartIcon from "@/icons/CartIcon"
import { useCart } from "@/hooks"

export default function CartTotalMobile() {
  const { cartData, totalPrice } = useCart()

  const isCartEmpty = cartData.length < 1

  return (
    <div className="mobile-bottom-wrapper fixed bottom-0 w-full font-sans text-xl shadow-upper-md lg:hidden">
      <div className="padding-x flex justify-between bg-skin-muted py-2">
        <span>Total Price:</span>
        <span>{totalPrice} Ks</span>
      </div>
      <Link
        href={isCartEmpty ? "#" : "/checkout"}
        tabIndex={isCartEmpty ? -1 : 1}
        className={`primary-btn-color flex w-full items-center justify-center gap-x-4 py-4 font-medium ${
          isCartEmpty ? "disabled-btn" : ""
        }`}
      >
        <CartIcon className="stroke-skin-base stroke-2" />
        Checkout
      </Link>
    </div>
  )
}
