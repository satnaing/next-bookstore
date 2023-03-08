import Breadcrumb from "@/common-components/Breadcrumb"
import CaretDownIcon from "@/icons/CaretDownIcon"
import Link from "next/link"
import AddAllToCart from "./components/AddAllToCart"
import WishlistTable from "./components/WishlistTable"
import WishlistTitle from "./components/WishlistTitle"

export default function Page() {
  return (
    <main className="main-container">
      <section>
        <Breadcrumb />
        <WishlistTitle />
        <div className="my-4">
          <div className="table-wrapper min-h-[18rem] lg:col-span-2">
            <WishlistTable />
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
              <AddAllToCart />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
