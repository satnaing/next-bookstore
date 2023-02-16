"use client"

import { useQuery } from "@tanstack/react-query"
import ItemCard from "@/common-components/ItemCard"
import CardSkeletons from "@/skeletons/CardSkeletons"
import { getBooksBySlug } from "app/api"

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
    <>
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
    </>
  )
}
