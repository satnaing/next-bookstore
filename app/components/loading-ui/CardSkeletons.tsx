import HeartIcon from "@/icons/HeartIcon"
import { generateUniqueArray } from "@/utils/utilFuncs"

const CardSkeletons = ({ num, slug }: { num: number; slug?: string }) => {
  // Generate Unique set of numbers array
  const numOfCards = generateUniqueArray(num)

  return (
    <div className="cards-container">
      {numOfCards.map(id => (
        <div
          key={`${slug}${id}`}
          className="flex flex-col gap-y-2 rounded border-2 border-gray-100 
last:hidden sm:last:flex sm:even:hidden md:last:hidden md:even:flex lg:last:flex"
        >
          <div className="p-4 sm:p-8 md:p-4 lg:p-8">
            <div className="h-44 animate-pulse bg-slate-200" />
          </div>
          <div className="content px-4 pb-4">
            <header className="h-10 line-clamp-2">
              <h3 className="h-4 w-1/2 animate-pulse bg-slate-200 text-sm" />
            </header>
            <div className="price mb-3 font-medium">
              <div className="h-4 w-2/3 animate-pulse bg-slate-200"></div>
            </div>
            <div className="buttons flex gap-x-2">
              <button
                type="button"
                className="flex-1 animate-pulse rounded bg-slate-200 px-1 text-sm font-semibold text-transparent"
              >
                Add To Cart
              </button>
              <button
                type="button"
                className="bg-skin-border-skin-muted basis-1/4 animate-pulse rounded border border-skin-muted p-1"
                title="Add To Wishlist"
              >
                <HeartIcon
                  className={`!stroke-skin-dark stroke-2 opacity-10`}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardSkeletons
