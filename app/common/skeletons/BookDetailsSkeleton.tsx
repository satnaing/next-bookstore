"use client"

import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

const BookDetailsSkeleton = () => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-6 md:flex-row md:gap-10 lg:gap-16">
        <div
          className={`image-wrapper mx-auto w-full max-w-[20rem] rounded border-2 border-gray-100 p-8 md:w-2/5 md:max-w-none md:self-start md:p-8 lg:p-16`}
        >
          <div className="relative h-72 w-full overflow-hidden transition-transform duration-500 hover:scale-110 md:h-80 xl:h-96">
            <Skeleton className="h-full w-full" />
          </div>
        </div>
        <div className="h-screen md:w-3/5">
          <div className="h-3/4 overflow-hidden">
            <Skeleton count={60} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetailsSkeleton
