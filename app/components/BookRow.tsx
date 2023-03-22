"use client"

import { useQuery } from "@tanstack/react-query"
import ItemCard from "@/components/ItemCard"
import CardSkeletons from "@/loading-ui/CardSkeletons"
import { getBooksBySlug } from "@/lib/api"

type Props = {
  slug: string
}

export default function BookRow({ slug }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books", { filters: { category: slug }, limit: 5 }],
    queryFn: () => getBooksBySlug(slug, 5),
  })

  if (isLoading) return <CardSkeletons num={5} slug={slug} />

  if (isError) return <div>is Error ...</div>

  return (
    <div className="cards-container">
      {data.data.map(({ id, attributes }) => {
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
            image={image.data[0].attributes.formats.small.url}
          />
        )
      })}
    </div>
  )
}
