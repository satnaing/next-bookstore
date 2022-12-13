import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import Image from "next/image"
import sampleBook from "@/public/we-were-liars-book.jpeg"
import HeartIcon from "@/icons/HeartIcon"

let mockBooks: number[] = []
for (let index = 1; index < 21; index++) {
  mockBooks.push(index)
}

type Props = {
  params: { category: string }
  searchParams: { id: string }
}

export default function Page({ params, searchParams }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <NavBar />
      <main className="padding-x max-width py-6 font-sans">
        <div className="flex flex-col gap-6">
          <div className="image-wrapper rounded bg-skin-card p-16 sm:p-8">
            <Image src={sampleBook} priority alt="We Were Liars Book" />
          </div>
          <div>
            <h1 className="text-xl font-bold">SPY X FAMILY 3</h1>
            <p className="my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              volutpat odio et dapibus dignissim. Praesent maximus tincidunt
              ultricies. Nam sodales dolor arcu, non venenatis odio tempor eu
            </p>
            <p className="my-2">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              volutpat odio et dapibus dignissim. Praesent maximus tincidunt
              ultricies. Nam sodales dolor arcu, non venenatis odio tempor eu
            </p>

            <hr className="my-4" />

            <div className="grid grid-cols-2 gap-y-2">
              <div>Book ID :</div>
              <div>BK 1622018</div>

              <div>Author :</div>
              <div>Tatsuya Endo</div>

              <div>Categories :</div>
              <div>Fiction, Novel, Story</div>

              <div>Availibility : </div>
              <div>5 in stock</div>
            </div>

            <div className="my-4 flex justify-between">
              <div>
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
              </div>
              <span className="text-xl font-semibold">MMK 7386Ks</span>
            </div>

            <div className="my-6 flex flex-col-reverse gap-4">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-x-4 rounded bg-skin-accent py-2 text-center text-lg font-medium text-skin-base"
              >
                Add To Cart
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-x-4 rounded border-2 border-skin-accent bg-skin-base py-2 text-center text-lg font-medium text-skin-accent"
              >
                <HeartIcon className="stroke-skin-accent stroke-2" />
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
