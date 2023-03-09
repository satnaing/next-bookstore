"use client"

import Image from "next/image"
import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import CartDropdownSkeleton from "@/loading-ui/CartDropdownSkeleton"
import CartIcon from "@/icons/CartIcon"
import CancelIcon from "@/icons/CancelIcon"
import { useCartStore } from "@/store"
import { useCart } from "@/hooks"

const CartDropdown = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore()

  const { cartData, totalPrice, totalQuantity, isLoading } = useCart()

  return (
    <NavigationMenu.Item
      className="dropdown-menu cart-dropdown after:block after:w-0 after:border after:border-skin-accent
              after:opacity-0 after:transition-all after:duration-300 after:ease-out"
    >
      <NavigationMenu.Trigger
        id="learn"
        className="relative flex h-full items-center justify-center gap-x-2 px-2"
        aria-controls="cart-content"
      >
        <CartIcon />
        <span className="hidden md:inline">Cart</span>
        {totalQuantity > 0 && (
          <span className="bg-skin absolute -right-2 -top-2 inline-block rounded-full bg-skin-accent py-1 px-2 text-xs text-skin-base md:-left-1 md:right-auto md:-top-1">
            {totalQuantity}
          </span>
        )}
      </NavigationMenu.Trigger>

      <NavigationMenu.Content
        id="cart-content"
        className="absolute top-14 right-0 bg-skin-base p-4 shadow-lg"
      >
        <div className="mb-4 text-center font-serif text-base font-semibold">
          My Shopping Cart
        </div>
        <div className="mb-4 max-h-80 overflow-y-auto">
          {cart.length < 1 ? (
            <div className="flex h-36 items-center justify-center">
              <div className="mx-3 w-64 text-center opacity-75">
                Cart is empty!
              </div>
            </div>
          ) : isLoading ? (
            cart.map(c => <CartDropdownSkeleton key={c.id} />)
          ) : (
            cartData.map(item => (
              <div
                key={item.id}
                className="grid grid-cols-[auto_2fr_auto] grid-rows-[2fr_1fr_1fr] gap-x-2 border-b py-2 font-sans text-sm"
              >
                <div className="row-span-4 w-24">
                  <div className="relative h-32 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-contain py-1"
                      fill
                      sizes="(min-width: 640px) 20vw, 50vw"
                      priority
                    />
                  </div>
                </div>
                <div className="col-start-2 row-start-1 w-36">
                  <Link
                    href={`/item/${item.slug}`}
                    className="font-medium italic underline decoration-slate-400 decoration-dashed underline-offset-2 line-clamp-2 hover:decoration-solid"
                  >
                    {item.title}
                  </Link>
                </div>
                <div className="col-span-2 col-start-2 row-start-2">
                  <span className="">Price: </span>
                  <span className="font-medium">
                    {item.price.toLocaleString()}Ks
                  </span>
                </div>
                <div className="col-span-2 col-start-2 row-start-3">
                  <button
                    type="button"
                    title="Reduce Quantity"
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className={`rounded border bg-skin-card py-1 px-3 leading-none ${
                      item.quantity < 2
                        ? "cursor-not-allowed bg-skin-card opacity-75"
                        : ""
                    }`}
                    tabIndex={item.quantity < 2 ? -1 : 0}
                  >
                    -
                  </button>
                  <span className="mx-2 inline-block w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    title="Reduce Quantity"
                    onClick={() => updateQuantity(item.id, "increase")}
                    className="rounded border bg-skin-card py-1 px-3 leading-none"
                  >
                    +
                  </button>
                </div>
                <div className="col-span-1 col-start-3 row-span-1 row-start-1">
                  <button
                    title="Remove"
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <CancelIcon className="stroke-slate-600 hover:stroke-2" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <hr />
        <div className="my-2 flex items-baseline justify-between">
          <span className="text-base">Total Price :</span>
          <span className="text-base font-semibold">{totalPrice} Ks</span>
        </div>
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-base">Shipping :</span>
          <span className="w-44 text-right font-sans text-xs italic opacity-75">
            Taxes and shipping fee will be calculated at checkout
          </span>
        </div>
        <div className="flex justify-between gap-x-2 text-base">
          <Link
            href={`/checkout`}
            className="w-full bg-skin-dark py-1 text-center text-skin-base hover:bg-opacity-80 active:bg-opacity-100"
          >
            Checkout
          </Link>
          <Link
            href={`/cart`}
            className="w-full border border-skin-dark py-1 text-center transition-colors duration-200 hover:bg-skin-dark hover:text-skin-base"
          >
            View Cart
          </Link>
        </div>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  )
}

export default CartDropdown
