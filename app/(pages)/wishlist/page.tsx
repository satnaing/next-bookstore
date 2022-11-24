import Link from "next/link"
import Image from "next/image"
import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import CancelIcon from "@/icons/CancelIcon"
import CaretDownIcon from "@/icons/CaretDownIcon"
import sampleBook from "@/public/we-were-liars-book.jpeg"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <NavBar />
      <main className="py-6">
        <section className="max-width padding-x">
          <h1 className="text-xl font-bold md:text-2xl">My Wishlist</h1>
          <div className="my-4">
            <div className="table-wrapper lg:col-span-2">
              <table className="w-full">
                <thead className="hidden bg-skin-fill font-sans font-semibold md:table-header-group">
                  <tr>
                    <th colSpan={2} className="py-1">
                      Book Title
                    </th>
                    <th className="py-1">Status</th>
                    <th className="py-1 md:text-right">Price</th>
                    <th colSpan={2} className="py-1">
                      Action
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
                    <td className="col-span-2 col-start-2 row-start-2 md:text-center">
                      <span className="md:hidden">Status: </span>
                      <span className="font-medium italic">In Stock</span>
                    </td>
                    <td className="col-span-2 col-start-2 row-start-3 md:text-right">
                      <span className="md:hidden">Price: </span>
                      <span className="font-medium">7,500Ks</span>
                    </td>
                    <td className="col-span-2 col-start-2 row-start-4 md:text-right">
                      <button
                        type="button"
                        className="rounded border-2 border-skin-accent py-1 px-2 text-sm font-medium text-skin-accent hover:bg-skin-fill"
                      >
                        Add To Cart
                      </button>
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
              <button
                type="button"
                className="mt-6 w-full rounded border-2 border-skin-accent py-1 font-sans text-skin-accent shadow hover:bg-skin-fill hover:shadow-md md:hidden lg:hidden"
              >
                Continue Shopping
              </button>
              <div className="fixed bottom-0 left-0 mt-6 w-full items-center justify-between md:static md:flex">
                <Link
                  href="/"
                  className="hidden items-center font-sans underline decoration-dotted underline-offset-4 hover:decoration-solid md:inline-flex"
                >
                  <CaretDownIcon className="rotate-90 stroke-skin-dark stroke-1" />{" "}
                  Continue Shopping
                </Link>
                <button
                  type="button"
                  className="w-full bg-skin-accent py-2 px-2 font-sans text-lg font-medium text-skin-base hover:bg-[#F26E5D] md:w-auto md:rounded md:py-1"
                >
                  Add All To Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="mt-auto hidden md:block">
        <Footer />
      </div>
    </div>
  )
}
