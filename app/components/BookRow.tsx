"use client"

import ItemCard from "@/components/ItemCard"
import CardSkeletons from "@/loading-ui/CardSkeletons"
import { getOptimizedImage } from "@/utils/utilFuncs"
import { Books } from "@/store/server/books/types"
import { useBooks } from "@/store/server/books/queries"

type Props = {
  slug: string
  books: Record<string, Books>
}

export default function BookRow({ slug, books }: Props) {
  const { data, isError, isLoading } = useBooks({
    initialData: books[slug],
    filter: { slug, limit: 5 },
  })

  if (isLoading || isError) return <CardSkeletons num={5} slug={slug} />

  return (
    <div className="cards-container">
      {data?.data.map(({ id, attributes }) => {
        const { slug, price, title, image } = attributes
        return (
          <ItemCard
            key={id}
            className={`${
              data.data.length >= 5
                ? "last:hidden sm:last:flex sm:even:hidden md:last:hidden md:even:flex lg:last:flex"
                : data.data.length === 4
                ? "sm:last:hidden md:sm:last:flex"
                : ""
            }`}
            id={id}
            price={price}
            slug={slug}
            title={title}
            image={getOptimizedImage(image)}
          />
        )
      })}
    </div>
  )
}
