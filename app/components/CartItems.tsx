"use client"

import Link from "next/link"
import Image from "next/image"
import Breadcrumb from "app/components/Breadcrumb"
import CartItemSkeleton from "@/skeletons/CartItemSkeleton"
import CancelIcon from "@/icons/CancelIcon"
import CartIcon from "@/icons/CartIcon"
import CaretDownIcon from "@/icons/CaretDownIcon"
import { useCartStore } from "@/store"
import { useCart, useMounted } from "@/hooks"

export default function CartItems() {
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
              <thead className="hidden bg-skin-fill font-sans font-semibold md:table-header-group">
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
                      <span>
                        {mounted ? "Cart is empty!" : "Cart is loading"}
                      </span>
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
                          className="font-medium italic underline decoration-slate-400 decoration-dashed underline-offset-2 line-clamp-2 hover:decoration-solid md:!inline md:line-clamp-4"
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
                          className={`rounded border bg-skin-card px-3 py-1 text-2xl leading-none ${
                            item.quantity < 2
                              ? "cursor-not-allowed bg-skin-card opacity-75"
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
                          className="rounded border bg-skin-card px-3 py-1 text-2xl leading-none"
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
                          <CancelIcon className="stroke-slate-600 hover:stroke-2" />
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
            className="mt-4 hidden items-center font-sans underline decoration-dotted underline-offset-4 hover:decoration-solid lg:inline-flex"
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
              className="block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2 outline-skin-accent"
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
              className="block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2 outline-skin-accent"
            />
            <span className="font-sans text-sm italic opacity-70">
              Coupon code will be applied on the checkout
            </span>
          </div>
          <hr />
          <button
            type="button"
            className="my-2 rounded border-2 border-skin-accent py-1 font-sans text-skin-accent shadow hover:bg-skin-fill hover:shadow-md lg:hidden"
          >
            Continue Shopping
          </button>
          <div className="hidden font-sans text-lg lg:block">
            <div className="mb-4 flex items-baseline justify-between">
              <span className="text-base">Total Price :</span>
              <span className="font-semibold">{totalPrice} Ks</span>
            </div>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-x-4 bg-skin-accent py-2 text-center font-medium text-skin-base"
            >
              <CartIcon className="stroke-skin-base stroke-2" />
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
