import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import Image from "next/image"
import sampleBook from "@/public/we-were-liars-book.jpeg"
import HeartIcon from "@/icons/HeartIcon"
import SocialGroup from "@/common-components/SocialGroup"

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
        <div className="flex flex-col gap-6 md:flex-row md:gap-10 lg:gap-16">
          <div className="image-wrapper mx-auto max-w-[20rem] rounded bg-skin-card p-16 md:w-2/5 md:max-w-none md:self-start">
            <Image src={sampleBook} priority alt="We Were Liars Book" />
          </div>
          <div className="md:w-3/5">
            <h1 className="text-xl font-bold md:text-2xl">SPY X FAMILY 3</h1>
            <p className="my-2 md:my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              volutpat odio et dapibus dignissim. Praesent maximus tincidunt
              ultricies. Nam sodales dolor arcu, non venenatis odio tempor eu
            </p>
            <p className="my-2 md:my-4">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              volutpat odio et dapibus dignissim. Praesent maximus tincidunt
              ultricies. Nam sodales dolor arcu, non venenatis odio tempor eu
            </p>

            <hr className="my-4 md:my-6" />

            <div className="grid grid-cols-2 gap-y-2 md:grid-cols-3 md:gap-y-4 lg:grid-cols-4">
              <div>Book ID :</div>
              <div className="md:col-span-2 lg:col-span-3">BK 1622018</div>

              <div>Author :</div>
              <div className="md:col-span-2 lg:col-span-3">Tatsuya Endo</div>

              <div>Categories :</div>
              <div className="md:col-span-2 lg:col-span-3">
                Fiction, Novel, Story
              </div>

              <div>Availibility : </div>
              <div className="md:col-span-2 lg:col-span-3">5 in stock</div>
            </div>

            <div className="my-4 flex justify-between md:my-6 md:flex-col-reverse md:gap-y-6">
              <div>
                <button
                  type="button"
                  title="Reduce Quantity"
                  className="rounded border bg-skin-card px-2 text-2xl leading-none md:px-3 md:text-3xl"
                >
                  -
                </button>
                <span className="mx-2 md:mx-4 md:text-2xl">2</span>
                <button
                  type="button"
                  title="Reduce Quantity"
                  className="rounded border bg-skin-card px-2 text-2xl leading-none md:px-3 md:text-3xl"
                >
                  +
                </button>
              </div>
              <span className="text-xl font-semibold">MMK 7386Ks</span>
            </div>

            <div className="my-6 flex flex-col-reverse gap-4 md:flex-row md:gap-8">
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

            <SocialGroup className="!justify-start" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
