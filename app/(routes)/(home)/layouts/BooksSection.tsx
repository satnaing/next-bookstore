"use client"

import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import BookRow from "@/components/BookRow"
import CaretDownIcon from "@/icons/CaretDownIcon"
import { getFeaturedCategories } from "@/lib/api"
import { Category } from "@/types/Category"

const BooksSection = ({ categories }: { categories: Category }) => {
  const { data } = useQuery({
    queryKey: ["categories", { filters: true }],
    queryFn: getFeaturedCategories,
    initialData: categories,
  })

  const categoriesArray = data.data.map(({ attributes }) => ({
    name: attributes.name,
    slug: attributes.slug,
  }))

  return (
    <div id="books" className="py-14">
      {categoriesArray.map(({ name, slug }) => (
        <section key={slug} className="mx-auto max-w-6xl px-4 py-6 md:px-8">
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-2xl font-medium capitalize md:text-2xl">
              {name}
            </h2>
            <SeeAll href={`/categories/${slug}`} />
          </div>
          <BookRow key={slug} slug={slug} />
          <div className="mt-8 flex items-center justify-center md:hidden">
            <SeeAll href={`/categories/${slug}`} bottom />
          </div>
        </section>
      ))}
    </div>
  )
}

type SeeAllType = {
  href: string
  bottom?: boolean
}

const SeeAll = ({ href, bottom = false }: SeeAllType) => (
  <Link
    href={href}
    className={`${
      bottom ? "flex" : "hidden md:flex"
    } items-center font-sans font-medium`}
  >
    See All
    <CaretDownIcon className="-rotate-90 scale-75" />
  </Link>
)

export default BooksSection
