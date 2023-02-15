"use client"

import { useQuery } from "@tanstack/react-query"
import { getBooks } from "app/api/hydratedData"
import ItemCard from "@/common-components/ItemCard"
import CardSkeletons from "@/skeletons/CardSkeletons"

export default function BookRow() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  })

  if (isLoading) return <CardSkeletons num={5} />

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
