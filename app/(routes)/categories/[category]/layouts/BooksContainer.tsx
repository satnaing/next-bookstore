"use client"

import { useQuery } from "@tanstack/react-query"
import ItemCard from "app/components/ItemCard"
import Pagination from "app/components/Pagination"
import CardSkeletons from "@/loading-ui/CardSkeletons"
import scrollToTop from "@/utils/scrollToTop"
import { getOptimizedImage } from "@/utils/utilFuncs"
import { Books } from "@/store/server/books/types"
import {
  getBooksByCategory,
  useBooksByCategory,
} from "@/store/server/books/queries"

type Props = {
  initialData: Books
  category: string
  currentPage: number
}

export default function BooksContainer({
  initialData,
  category,
  currentPage,
}: Props) {
  const { data, isLoading, isError } = useBooksByCategory({
    slug: category,
    pageNum: currentPage,
    initialData,
  })

  if (isLoading || isError) return <CardSkeletons num={10} slug={category} />

  const { page, pageSize, pageCount, total } = data.meta.pagination

  const startItem = (page - 1) * pageSize + 1
  const lastItem = page * pageSize < total ? page * pageSize : total

  return (
    <div onLoad={() => scrollToTop()}>
      <div className="cards-container">
        {data.data.map(({ id, attributes }) => {
          const { slug, price, title, image } = attributes

          return (
            <ItemCard
              key={id}
              id={id}
              className="last:hidden sm:last:flex sm:even:hidden md:last:hidden md:even:flex lg:last:flex"
              price={price}
              slug={slug}
              title={title}
              image={getOptimizedImage(image)}
            />
          )
        })}
      </div>
      <div className="my-10 flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between">
        <span className="font-sans">
          Showing {startItem} ~ {lastItem} of {total}
        </span>
        {pageCount > 1 && (
          <Pagination pageCount={pageCount} currentPage={page} />
        )}
      </div>
    </div>
  )
}
