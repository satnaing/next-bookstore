import { generateUniqueArray } from "@/utils/utilFuncs"

const BookDetailsSkeleton = () => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-6 md:flex-row md:gap-10 lg:gap-16">
        <div
          className={`image-wrapper mx-auto w-full max-w-[20rem] rounded border-2 border-gray-100 p-8 md:w-2/5 md:max-w-none md:self-start md:p-8 lg:p-16`}
        >
          <div className="relative h-72 w-full overflow-hidden transition-transform duration-500 hover:scale-110 md:h-80 xl:h-96">
            <div className="h-full w-full animate-pulse bg-slate-200" />
          </div>
        </div>
        <div className="h-screen md:w-3/5">
          <h1 className="h-8 w-44 animate-pulse bg-slate-200" />
          <div className="book-desc my-2 md:my-4">
            {generateUniqueArray(15).map(e => (
              <div
                key={e}
                className="my-2 h-4 animate-pulse rounded-sm bg-slate-200"
              />
            ))}
          </div>

          <hr className="my-4 md:my-6" />

          <div className="grid grid-cols-2 gap-y-2 md:grid-cols-3 md:gap-y-4 lg:grid-cols-4">
            <div>Author :</div>
            <div className="md:col-span-2 lg:col-span-3">
              <div className="h-full animate-pulse rounded-sm bg-slate-200" />
            </div>

            <div>Categories :</div>
            <div className="md:col-span-2 lg:col-span-3">
              <div className="h-full animate-pulse rounded-sm bg-slate-200" />
            </div>

            <div>Availibility : </div>
            <div className="md:col-span-2 lg:col-span-3">
              <div className="h-full animate-pulse rounded-sm bg-slate-200" />
            </div>
          </div>

          <div className="my-4 flex justify-between md:my-6 md:flex-col-reverse md:gap-y-6">
            <div>
              <button
                type="button"
                title="Reduce Quantity"
                className="rounded border bg-skin-muted px-2 text-2xl leading-none md:px-3 md:text-3xl"
              >
                -
              </button>
              <span className="mx-2 inline-block md:mx-4 md:text-2xl">1</span>
              <button
                type="button"
                title="Reduce Quantity"
                className="rounded border bg-skin-muted px-2 text-2xl leading-none md:px-3 md:text-3xl"
              >
                +
              </button>
            </div>
            <span className="text-xl font-semibold">MMK</span>
          </div>

          <div className="my-6 flex flex-col-reverse gap-4 md:flex-row md:gap-8">
            <button
              type="button"
              className="primary-btn-color flex w-full items-center justify-center gap-x-4 rounded py-2 text-center text-lg font-medium"
            >
              Add To Cart
            </button>
            <button
              type="button"
              className="outline-btn-color flex w-full items-center justify-center gap-x-4 rounded border-2 py-2 text-center text-lg font-medium"
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetailsSkeleton
