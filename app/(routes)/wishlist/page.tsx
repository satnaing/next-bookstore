import Link from "next/link"
import Breadcrumb from "@/components/Breadcrumb"
import CaretDownIcon from "@/icons/CaretDownIcon"
import AddAllToCart from "./components/AddAllToCart"
import WishlistTable from "./components/WishlistTable"
import WishlistTitle from "./components/WishlistTitle"

export const metadata = {
  title: "Wishlist",
  openGraph: {
    title: "Wishlist",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/wishlist`,
  },
  twitter: { title: "Wishlist" },
}

export default function Page() {
  return (
    <main className="main-container">
      <section className="mb-20 lg:mb-auto">
        <Breadcrumb />
        <WishlistTitle />
        <div className="my-4">
          <div className="table-wrapper min-h-[18rem] lg:col-span-2">
            <WishlistTable />
            <hr />
            <button
              type="button"
              className="outline-btn-color mt-6 w-full rounded border-2 py-1 font-sans shadow hover:shadow-md md:hidden lg:hidden"
            >
              Continue Shopping
            </button>
            <div className="fixed bottom-0 left-0 mt-6 w-full items-center justify-between md:static md:flex">
              <Link
                href="/"
                className="text-link hidden items-center font-sans underline-offset-8 md:inline-flex"
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
