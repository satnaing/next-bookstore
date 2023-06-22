"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import * as RadioGroup from "@radix-ui/react-radio-group"
import Input from "@/components/Input"
import LoadingOverlay from "@/components/loading-ui/LoadingOverlay"
import CaretDownIcon from "@/icons/CaretDownIcon"
import AlertIcon from "@/icons/AlertIcon"
import { useCart, useMounted } from "@/hooks"
import { useCartStore } from "@/store/client"

type Inputs = {
  fullName: string
  email: string
  username: string
  phone: string
  saveInfo: boolean
  address: string
  orderNotes: string
}

type Shipping = "pickup" | "doorToDoor"
type Payment = "cashOnDelivery" | "bankTransfer"

export default function CheckoutSection() {
  const router = useRouter()
  const { cart } = useCartStore() // cart data from localStorage
  const { cartData, totalPrice } = useCart() // fetched cart data
  const [shipping, setShipping] = useState<Shipping>("doorToDoor") // Shipping Method
  const [payment, setPayment] = useState<Payment>("cashOnDelivery") // Payment Method
  const [errorMsg, setErrorMsg] = useState<string | null>(null) // Form overall error message
  const [overallPrice, setOverallPrice] = useState(0) // Overall Price

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const mounted = useMounted()

  // update overallPrice when
  // totalPrice/shipping is updated
  useEffect(() => {
    const shippingFee = shipping === "doorToDoor" ? 2000 : 0
    setOverallPrice(Number(totalPrice.replace(",", "")) + shippingFee)
  }, [totalPrice, shipping])

  if (!mounted) return <LoadingOverlay />

  if (cart.length === 0) {
    router.back()
  }

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log({ ...data, shipping, payment })
  }

  return (
    <section>
      <h1 className="text-center font-serif text-2xl font-semibold lg:text-3xl">
        Checkout
      </h1>
      <p className="mb-8 text-center lg:mb-14">
        Provide your payment and delivery address information to finalize your
        order.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-4 md:grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-5 lg:gap-x-10"
      >
        <div className="md:col-span-1 lg:col-span-3">
          <h2 className="text-xl font-bold">Billing Details</h2>
          {errorMsg && (
            <span className="error mt-2 inline-block">
              <AlertIcon className="stroke-2 align-text-bottom" /> {errorMsg}
            </span>
          )}
          <div className="mt-4">
            <Input
              label="Full Name"
              placeholder="John Doe"
              errorMsg={errors?.fullName?.message}
              register={register("fullName", {
                pattern: {
                  value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                  message: "Please enter a valid full name.",
                },
                required: {
                  value: true,
                  message: "This field is required.",
                },
              })}
            />

            <Input
              label="Email Address"
              placeholder="johndoe@gmail.com"
              errorMsg={errors?.email?.message}
              type="email"
              register={register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
                required: {
                  value: true,
                  message: "This field is required.",
                },
              })}
            />

            <Input
              label="Phone"
              placeholder="+959501234 (or) 09501234"
              errorMsg={errors?.phone?.message}
              register={register("phone", {
                required: {
                  value: true,
                  message: "This field is required.",
                },
                pattern: {
                  value: /^(\+?95|\+?959|09)?([2-9]\d{6,9})$/,
                  message: "Please enter a valid phone number.",
                },
              })}
            />

            <div className="mb-2">
              <label className="font-sans font-medium">
                Address
                <textarea
                  placeholder="No (27), 11 M, Hledan, Yangon"
                  rows={4}
                  className="my-1 block w-full rounded border-2 border-skin-gray bg-skin-base py-1 px-2 font-normal outline-skin-accent"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                  })}
                />
              </label>
              {errors.address && (
                <div className="error">{errors.address.message}</div>
              )}
            </div>

            <label className="ml-1">
              <input
                type="checkbox"
                {...register("saveInfo")}
                className="mr-2 scale-125 accent-skin-accent outline-skin-accent"
              />
              Save this information for next time
            </label>

            <div className="my-4">
              <label className="font-sans font-medium">
                Order Notes (optional)
                <textarea
                  rows={4}
                  className="my-1 block w-full rounded border-2 border-skin-gray bg-skin-base py-1 px-2 font-normal outline-skin-accent"
                  {...register("orderNotes")}
                />
              </label>
              {errors.orderNotes && (
                <div className="error">{errors.orderNotes.message}</div>
              )}
            </div>
          </div>
          <hr />
          <Link
            href="/cart"
            className="text-link mt-4 hidden items-center font-sans underline-offset-8 md:inline-flex"
          >
            <CaretDownIcon className="rotate-90 stroke-skin-dark stroke-1" />{" "}
            Return to Cart
          </Link>
        </div>

        {/* ===== Order Summary Section ===== */}
        <div className="my-4 flex flex-col gap-3 rounded bg-skin-muted p-4 md:col-span-1 md:p-6 lg:col-span-2 lg:my-0 lg:p-8">
          <h2 className="text-center text-lg font-semibold">Order Summary</h2>

          <div className="flex justify-between font-semibold">
            <span>Item</span>
            <span>Subtotal</span>
          </div>
          <hr />

          {/* Cart Items */}
          {cartData.map(item => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="max-w-[70%]">
                {item.title}{" "}
                <span className="font-light">x {item.quantity}</span>
              </div>
              <span>{item.price} Ks</span>
            </div>
          ))}

          <hr />

          {/* Coupon Code */}
          <div>
            <span className="font-medium">Have a Coupon code?</span>
            <div className="mt-1 flex justify-between">
              <input
                type="text"
                aria-label="Coupon Code"
                className="mr-3 flex-1 rounded border-2 border-skin-gray bg-skin-base px-2 outline-skin-accent"
              />
              <button
                type="button"
                className="rounded bg-skin-accent px-4 py-1 text-lg font-medium tracking-widest text-skin-base outline-offset-2 hover:bg-opacity-80 active:bg-opacity-100"
              >
                Apply
              </button>
            </div>
          </div>

          <hr />

          {/* Subtotal */}
          <div className="flex items-center justify-between">
            <span className="font-medium">Subtotal</span>
            <span className="font-semibold">{totalPrice} Ks</span>
          </div>

          {/* Shipping */}
          <div className="flex items-start justify-between">
            <span className="flex-1 font-medium">Shipping</span>
            <RadioGroup.Root
              className="shipping-options flex flex-1 flex-col gap-2"
              defaultValue={shipping}
              aria-label="Choose Shipping"
              onValueChange={(val: Shipping) => setShipping(val)}
            >
              <div
                className="relative flex items-center rounded
              focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-skin-accent-dark"
              >
                <RadioGroup.Item
                  className="absolute right-4 h-5 w-5 cursor-pointer rounded-full shadow-skin-accent outline-none"
                  value="doorToDoor"
                  id="doorToDoor"
                  onChange={() => setShipping("doorToDoor")}
                >
                  <RadioGroup.Indicator asChild>
                    <svg
                      className="h-7 w-7 scale-110 stroke-skin-accent-dark stroke-2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 12.5l3 3 7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </RadioGroup.Indicator>
                </RadioGroup.Item>
                <label
                  className="ml-auto w-full cursor-pointer rounded bg-skin-gray bg-opacity-40 p-4 text-left font-bold leading-none text-skin-dark shadow-sm"
                  htmlFor="doorToDoor"
                >
                  Door to Door:{" "}
                  <span className="block text-sm font-normal">+ 2,000 Ks</span>
                </label>
              </div>

              <div
                className="relative flex items-center rounded
                focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-skin-accent-dark"
              >
                <RadioGroup.Item
                  className="absolute right-4 h-5 w-5 cursor-pointer rounded-full shadow-skin-accent
                    outline-none"
                  value="pickup"
                  id="pickup"
                >
                  <RadioGroup.Indicator asChild>
                    <svg
                      className="h-7 w-7 scale-110 stroke-skin-accent-dark stroke-2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 12.5l3 3 7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </RadioGroup.Indicator>
                </RadioGroup.Item>
                <label
                  className="ml-auto w-full cursor-pointer rounded bg-skin-gray bg-opacity-40 p-4 text-left font-bold leading-none text-skin-dark shadow-sm"
                  htmlFor="pickup"
                >
                  Store Pickup
                </label>
              </div>
            </RadioGroup.Root>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-xl font-semibold">{overallPrice} Ks</span>
          </div>

          <hr />

          {/* Payment Method */}
          <RadioGroup.Root
            className="flex flex-col gap-3"
            defaultValue="cashOnDelivery"
            aria-label="Choose Payment Transfer Method"
            onValueChange={(val: Payment) => setPayment(val)}
          >
            <div className="flex items-center">
              <RadioGroup.Item
                className="h-5 w-5 cursor-default rounded-full bg-skin-muted shadow-[0_0_0_2px] shadow-skin-accent outline-none focus-within:border-2 focus-within:border-skin-accent"
                value="cashOnDelivery"
                id="cashOnDelivery"
              >
                <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-3 after:w-3 after:rounded-[50%] after:bg-skin-accent after:content-['']" />
              </RadioGroup.Item>
              <label
                className="ml-auto w-11/12 py-2 pl-2 text-left font-bold leading-none text-skin-dark"
                htmlFor="cashOnDelivery"
              >
                Cash on Delivery
              </label>
            </div>

            <hr />

            <div className="flex items-start">
              <RadioGroup.Item
                className="h-5 w-5 cursor-default rounded-full bg-skin-muted shadow-[0_0_0_2px] shadow-skin-accent outline-none focus-within:border-2 focus-within:border-skin-accent"
                value="bankTransfer"
                id="bankTransfer"
              >
                <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-3 after:w-3 after:rounded-[50%] after:bg-skin-accent after:content-['']" />
              </RadioGroup.Item>
              <label
                className="ml-auto w-11/12 pl-2 text-left font-bold leading-none text-skin-dark"
                htmlFor="bankTransfer"
              >
                Bank Transfer
                <span className="mt-1 block text-sm font-normal">
                  Make your payment directly into our AYA, KBZ, CB, Wave & Kpay
                </span>
              </label>
            </div>
          </RadioGroup.Root>

          <hr />

          <button
            type="submit"
            className="primary-btn-color rounded border-2 border-skin-dark py-2 font-sans font-semibold"
          >
            Place Order
          </button>

          <Link
            href={`/cart`}
            className="outline-btn-color rounded border-2 py-2 text-center font-sans font-semibold shadow hover:shadow-md md:hidden"
          >
            Return to Cart
          </Link>
        </div>
      </form>
    </section>
  )
}
