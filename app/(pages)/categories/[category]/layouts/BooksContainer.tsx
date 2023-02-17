"use client"

import { useQuery } from "@tanstack/react-query"
import ItemCard from "@/common-components/ItemCard"
import Pagination from "@/common-components/Pagination"
import CardSkeletons from "@/skeletons/CardSkeletons"
import { getBooksByCategory } from "app/api"

type Props = {
  initialData: any
  category: string
  currentPage: number
}

export default function BooksContainer({
  initialData,
  category,
  currentPage,
}: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", { filters: { category } }, { currentPage }],
    queryFn: () => getBooksByCategory(category, currentPage),
    initialData,
  })

  if (isLoading) return <CardSkeletons num={10} slug={category} />

  if (isError) return <div>is Error ...</div>

  const { page, pageSize, pageCount, total } = data.meta.pagination

  const startItem = (page - 1) * pageSize + 1
  const lastItem = page * pageSize < total ? page * pageSize : total

  console.log(data)

  return (
    <>
      <div className="item-wrapper my-4 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 md:gap-x-6 lg:grid-cols-5">
        {data.data.map(({ attributes }: { attributes: any }) => {
          const { slug, price, title, image } = attributes
          return (
            <ItemCard
              key={slug}
              className="last:hidden sm:last:flex sm:even:hidden md:last:hidden md:even:flex lg:last:flex"
              price={price}
              slug={slug}
              title={title}
              image={image.data[0].attributes.url}
            />
          )
        })}
      </div>
      <div className="my-10 flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between">
        <span className="font-sans">
          Showing {startItem} ~ {lastItem} of {total}
        </span>
        <Pagination />
      </div>
    </>
  )
}