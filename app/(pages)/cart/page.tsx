import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import sampleBook from "@/public/we-were-liars-book.jpeg"
import Image from "next/image"
import CancelIcon from "@/icons/CancelIcon"
import CartIcon from "@/icons/CartIcon"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <NavBar />
      <main className="padding-x py-6">
        <h1 className="text-xl font-bold">My Cart</h1>
        <div className="my-4">
          <table>
            <thead className="hidden">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="grid grid-cols-[auto_2fr_auto] grid-rows-[2fr_1fr_1fr_1fr] gap-x-2 border-b py-2 font-sans">
                <td className="row-span-4 w-32">
                  <Image src={sampleBook} alt="we were younger" />
                </td>
                <td className="col-start-2 row-start-1">
                  <span className="font-medium italic line-clamp-2">
                    The Almanack of Naval Ravikant: A Guide to Wealth and
                    Happiness
                  </span>
                </td>
                <td className="col-span-2 col-start-2 row-start-2">
                  Price: <span className="font-medium">7,500Ks</span>
                </td>
                <td className="col-span-2 col-start-2 row-start-3">
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
                <td className="col-span-2 col-start-2 row-start-4">
                  Total: <span className="text-lg font-medium">15,000</span>
                </td>
                <td className="col-span-1 col-start-3 row-span-1 row-start-1">
                  <button title="Remove" type="button">
                    <CancelIcon />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="others my-4 flex flex-col gap-4">
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
              className="my-2 border-2 border-skin-accent bg-skin-fill py-1 font-sans shadow hover:shadow-md"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </main>
      <div className="mobile-bottom-wrapper fixed bottom-0 w-full font-sans text-xl shadow-upper-md">
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
