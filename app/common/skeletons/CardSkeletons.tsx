import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const CardSkeletons = ({ num, slug }: { num: number; slug: string }) => {
  // Generate Unique set of numbers array
  let numbers = new Set()
  while (numbers.size < length) {
    let randomNum = Math.floor(Math.random() * (num - 1 + 1)) + 1
    numbers.add(randomNum)
  }

  const numOfCards = Array.from(numbers)

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
