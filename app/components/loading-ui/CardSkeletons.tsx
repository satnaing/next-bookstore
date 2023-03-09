import Skeleton from "react-loading-skeleton"
import { generateUniqueArray } from "@/utils/utilFuncs"
import "react-loading-skeleton/dist/skeleton.css"

const CardSkeletons = ({ num, slug }: { num: number; slug: string }) => {
  // Generate Unique set of numbers array
  const numOfCards = generateUniqueArray(num)

  return (
    <>
      {numOfCards.map(id => (
        <div
          key={`${slug}${id}`}
          className="flex flex-col gap-y-2 rounded border-2 border-gray-100 
last:hidden sm:last:flex sm:even:hidden md:last:hidden md:even:flex lg:last:flex"
        >
          <div className="p-4 sm:p-8 md:p-4 lg:p-8">
            <Skeleton className="h-44" />
          </div>
          <div className="px-4 pb-4">
            <Skeleton count={4} />
          </div>
        </div>
      ))}
    </>
  )
}

export default CardSkeletons
