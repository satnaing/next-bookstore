import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import sampleBook from "@/public/we-were-liars-book.jpeg"
import Image from "next/image"
import CancelIcon from "@/icons/CancelIcon"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <NavBar />
      <main className="padding-x py-6">
        <h1 className="text-xl font-bold">My Cart</h1>
        <div className="container my-4">
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
              <tr className="grid grid-cols-[1fr_2fr_auto] grid-rows-[2fr_1fr_1fr_1fr] gap-x-2 font-sans">
                <td className="row-span-4">
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
          <div className="others"></div>
        </div>
      </main>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  )
}
