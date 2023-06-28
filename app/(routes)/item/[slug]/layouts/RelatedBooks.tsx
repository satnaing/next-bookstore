"use client"

import ItemCard from "@/components/ItemCard"
import CardSkeletons from "@/components/loading-ui/CardSkeletons"
import { useRelatedBooks } from "@/store/server/books/queries"

type Props = {
  currentBookId: number
  author: number
  categories: number[]
}

export default function RelatedBooks({
  currentBookId,
  author,
  categories,
}: Props) {
  const { data, isLoading, isError } = useRelatedBooks({ author, categories })

  const relatedBooks = data?.data
    .filter(book => book.id !== currentBookId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)

  return (
    <div className="my-12">
      <h2 className="mb-8 font-serif text-2xl font-bold">Related Books</h2>
      {isLoading || isError ? (
        <CardSkeletons num={5} />
      ) : (
        <div className="cards-container">
          {relatedBooks?.map(({ id, attributes }) => {
            const { slug, price, title, image } = attributes
            return (
              <ItemCard
                key={id}
                className="last:hidden sm:last:flex sm:even:hidden md:last:hidden md:even:flex lg:last:flex"
                id={id}
                price={price}
                slug={slug}
                title={title}
                image={(image as any)[0].url}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
