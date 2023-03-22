"use client"

import { useMounted } from "@/hooks"
import CartIcon from "@/icons/CartIcon"
import Link from "next/link"

type Props = {
  isDisabled?: boolean
  includeIcon?: boolean
  className?: string
}

const CheckoutButton = ({
  isDisabled = false,
  includeIcon = false,
  className = "",
}: Props) => {
  const isMounted = useMounted()

  return isMounted && isDisabled ? (
    <button
      type="button"
      className={`primary-btn-color disabled-btn flex w-full items-center justify-center gap-x-4 text-center ${className}`}
    >
      {includeIcon && <CartIcon className={`stroke-skin-base stroke-2`} />}
      Checkout
    </button>
  ) : (
    <Link
      href="/checkout"
      className={`primary-btn-color group flex w-full items-center justify-center gap-x-4 text-center ${className}`}
    >
      {includeIcon && (
        <CartIcon
          className={`stroke-skin-base stroke-2 group-focus-within:stroke-skin-accent`}
        />
      )}
      Checkout
    </Link>
  )
}

export default CheckoutButton
