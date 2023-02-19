"use client"

import { useEffect, useState } from "react"
import CartIcon from "@/icons/CartIcon"
import { useCartStore } from "@/lib/store"

export default function CartTotalMobile() {
  const [mounted, setMounted] = useState(false)
  const { cart } = useCartStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  const totalPrice = cart
    .reduce(
      (accumulator: number, currentItem) =>
        accumulator + currentItem.price * currentItem.quantity,
      0
    )
    .toLocaleString()

  if (!mounted) return <div>Loading...</div>

  return (
    <div className="mobile-bottom-wrapper fixed bottom-0 w-full font-sans text-xl shadow-upper-md lg:hidden">
      <div className="padding-x flex justify-between bg-skin-card py-2">
        <span>Total Price:</span>
        <span>{totalPrice} Ks</span>
      </div>
      <button
        type="button"
        className="flex w-full items-center justify-center gap-x-4 bg-skin-accent py-2 text-center font-medium text-skin-base"
      >
        <CartIcon className="stroke-skin-base stroke-2" />
        Checkout
      </button>
    </div>
  )
}
