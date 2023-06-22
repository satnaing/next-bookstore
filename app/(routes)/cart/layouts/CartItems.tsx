"use client"

import Link from "next/link"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import CartItemSkeleton from "@/loading-ui/CartItemSkeleton"
import CheckoutButton from "@/components/CheckoutButton"
import CancelIcon from "@/icons/CancelIcon"
import CaretDownIcon from "@/icons/CaretDownIcon"
import EmptyCartIcon from "@/icons/EmptyCartIcon"
import LoadingIcon from "@/icons/LoadingIcon"
import { useCartStore } from "@/store/client"
import { useCart, useMounted } from "@/hooks"

export default function CartItemSection() {
  const { cartData, totalPrice, isLoading } = useCart()
  const { cart, removeFromCart, updateQuantity } = useCartStore()

  const mounted = useMounted()

  return (
    <section className="mb-20 lg:mb-auto">
      <Breadcrumb />
      <h1 className="font-serif text-xl font-semibold md:text-2xl">My Cart</h1>
      <div className="my-4 lg:grid lg:grid-cols-3 lg:gap-x-6">
        <div className="table-wrapper lg:col-span-2 ">
          <div className="lg:min-h-[20.25rem]">
            <table className="w-full">
              <thead className="hidden bg-skin-muted font-sans font-semibold md:table-header-group">
                <tr>
                  <th colSpan={2} className="w-[42.5%] py-1">
                    Book Title
                  </th>
                  <th className="w-[17.5%] py-1 md:text-right">Price</th>
                  <th className="w-[17.5%] py-1">Quantity</th>
                  <th colSpan={2} className="w-[22.5%] py-1">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {!mounted || cart.length < 1 ? (
                  <tr>
                    <td colSpan={6} className="h-64 w-full text-center">
                      <div className="flex flex-col items-center">
                        {mounted ? <EmptyCartIcon /> : <LoadingIcon />}
                        <span>
                          {mounted ? "Cart is empty!" : "Cart is loading..."}
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : isLoading ? (
                  cart.map(c => <CartItemSkeleton key={c.id} />)
                ) : (
                  cartData.map(item => (
                    <tr
                      key={item.id}
                      className="grid grid-cols-[auto_2fr_auto] grid-rows-[2fr_1fr_1fr_1fr] gap-x-2 border-b py-2 font-sans md:table-row"
                    >
                      <td className="row-span-4 w-32 md:w-20">
                        <div className="relative h-44 w-full md:h-36">
                          <Image
                            src={item.image}
                            alt={item.title}
                            className="object-contain md:py-2"
                            fill
                            sizes="(min-width: 640px) 20vw, 50vw"
                            priority
                          />
                        </div>
                      </td>
                      <td className="col-start-2 row-start-1 md:max-w-[10rem] md:pl-2">
                        <Link
                          href={`/item/${item.slug}`}
                          className="text-link font-medium italic opacity-80 line-clamp-2 md:!inline md:line-clamp-4"
                        >
                          {item.title}
                        </Link>
                      </td>
                      <td className="col-span-2 col-start-2 row-start-2 md:text-right">
                        <span className="md:hidden">Price: </span>
                        <span className="font-medium">
                          {item.price.toLocaleString()}Ks
                        </span>
                      </td>
                      <td className="col-span-2 col-start-2 row-start-3 md:text-center">
                        <button
                          type="button"
                          title="Reduce Quantity"
                          onClick={() => updateQuantity(item.id, "decrease")}
                          className={`rounded border bg-skin-muted px-3 py-1 text-2xl leading-none ${
                            item.quantity < 2
                              ? "cursor-not-allowed bg-skin-muted opacity-75"
                              : ""
                          }`}
                          tabIndex={item.quantity < 2 ? -1 : 0}
                        >
                          -
                        </button>
                        <span className="mx-2 inline-block w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          title="Reduce Quantity"
                          onClick={() => updateQuantity(item.id, "increase")}
                          className="rounded border bg-skin-muted px-3 py-1 text-2xl leading-none"
                        >
                          +
                        </button>
                      </td>
                      <td className="col-span-2 col-start-2 row-start-4 md:max-w-[5rem] md:text-right">
                        <span className="md:hidden">Total: </span>
                        <span className="inline-block w-28 text-lg font-medium">
                          {(item.price * item.quantity).toLocaleString()}Ks
                        </span>
                      </td>
                      <td className="col-span-1 col-start-3 row-span-1 row-start-1 md:text-center">
                        <button
                          title="Remove"
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <CancelIcon className="stroke-skin-dark hover:stroke-2" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <hr />
          <Link
            href="/"
            className="text-link mt-4 hidden items-center font-sans underline-offset-8 lg:inline-flex"
          >
            <CaretDownIcon className="rotate-90 stroke-skin-dark stroke-1" />{" "}
            Continue Shopping
          </Link>
        </div>
        <div className="others my-4 flex flex-col gap-4 lg:my-0">
          <div className="order-notes-wrapper">
            <label
              htmlFor="order-notes"
              className="mb-2 font-sans font-semibold"
            >
              Order Notes
            </label>
            <textarea
              id="order-notes"
              name="order-notes"
              rows={4}
              className="block w-full rounded border-2 border-skin-gray bg-skin-base py-1 px-2 outline-skin-accent"
            ></textarea>
          </div>
          <hr />
          <div className="coupon-code-wrapper">
            <label
              htmlFor="coupon-code"
              className="mb-2 font-sans font-semibold"
            >
              Coupon Code
            </label>
            <input
              type="text"
              id="coupon-code"
              className="block w-full rounded border-2 border-skin-gray bg-skin-base py-1 px-2 outline-skin-accent"
            />
            <span className="font-sans text-sm italic opacity-70">
              Coupon code will be applied on the checkout
            </span>
          </div>
          <hr />
          <button
            type="button"
            className="outline-btn-color my-2 rounded border-2 py-1 font-sans shadow hover:shadow-md lg:hidden"
          >
            Continue Shopping
          </button>
          <div className="hidden font-sans text-lg lg:block">
            <div className="mb-4 flex items-baseline justify-between">
              <span className="text-base">Total Price :</span>
              <span className="font-semibold">{totalPrice} Ks</span>
            </div>
            <CheckoutButton
              includeIcon
              className="rounded py-2 font-medium"
              isDisabled={cart.length < 1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
