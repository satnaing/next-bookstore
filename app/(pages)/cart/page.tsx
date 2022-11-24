import Link from "next/link"
import Image from "next/image"
import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import CancelIcon from "@/icons/CancelIcon"
import CartIcon from "@/icons/CartIcon"
import CaretDownIcon from "@/icons/CaretDownIcon"
import sampleBook from "@/public/we-were-liars-book.jpeg"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <NavBar />
      <main className="py-6">
        <section className="max-width padding-x">
          <h1 className="text-xl font-bold md:text-2xl">My Cart</h1>
          <div className="my-4 lg:grid lg:grid-cols-3 lg:gap-x-6">
            <div className="table-wrapper lg:col-span-2">
              <table className="w-full">
                <thead className="hidden bg-skin-fill font-sans font-semibold md:table-header-group">
                  <tr>
                    <th colSpan={2} className="py-1">
                      Book Title
                    </th>
                    <th className="py-1 md:text-right">Price</th>
                    <th className="py-1">Quantity</th>
                    <th colSpan={2} className="py-1">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="grid grid-cols-[auto_2fr_auto] grid-rows-[2fr_1fr_1fr_1fr] gap-x-2 border-b py-2 font-sans md:table-row">
                    <td className="row-span-4 w-32 md:w-20">
                      <Image
                        src={sampleBook}
                        alt="we were younger"
                        className="md:py-2"
                      />
                    </td>
                    <td className="col-start-2 row-start-1 md:max-w-[10rem] md:pl-2">
                      <span className="font-medium italic line-clamp-2 md:line-clamp-4">
                        The Almanack of Naval Ravikant: A Guide to Wealth and
                        Happiness
                      </span>
                    </td>
                    <td className="col-span-2 col-start-2 row-start-2 md:text-right">
                      <span className="md:hidden">Price: </span>
                      <span className="font-medium">7,500Ks</span>
                    </td>
                    <td className="col-span-2 col-start-2 row-start-3 md:text-center">
                      <button
                        type="button"
                        title="Reduce Quantity"
                        className="rounded border bg-skin-card px-2 text-2xl leading-none"
                      >
                        -
                      </button>
                      <span className="mx-2">2</span>
                      <button
                        type="button"
                        title="Reduce Quantity"
                        className="rounded border bg-skin-card px-2 text-2xl leading-none"
                      >
                        +
                      </button>
                    </td>
                    <td className="col-span-2 col-start-2 row-start-4 md:text-right">
                      <span className="md:hidden">Total: </span>
                      <span className="text-lg font-medium">15,000Ks</span>
                    </td>
                    <td className="col-span-1 col-start-3 row-span-1 row-start-1 md:text-center">
                      <button title="Remove" type="button">
                        <CancelIcon />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                  className="block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2"
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
                  className="block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2"
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
                  <span className="font-semibold">15,000 Ks</span>
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
      </main>
      <div className="mobile-bottom-wrapper fixed bottom-0 w-full font-sans text-xl shadow-upper-md lg:hidden">
        <div className="padding-x flex justify-between bg-skin-card py-2">
          <span>Total Price:</span>
          <span>15,000 Ks</span>
        </div>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-x-4 bg-skin-accent py-2 text-center font-medium text-skin-base"
        >
          <CartIcon className="stroke-skin-base stroke-2" />
          Checkout
        </button>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  )
}
