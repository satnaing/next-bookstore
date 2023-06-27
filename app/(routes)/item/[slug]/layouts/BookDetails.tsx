"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import SocialGroup from "@/components/SocialGroup"
import BookDetailsSkeleton from "@/loading-ui/BookDetailsSkeleton"
import HeartIcon from "@/icons/HeartIcon"
import LoadingIcon from "@/icons/LoadingIcon"
import { useMounted } from "@/hooks"
import { useCartStore, useToastStore, useWishlistStore } from "@/store/client"
import { Books } from "@/store/server/books/types"
import { useBook } from "@/store/server/books/queries"

type Props = {
  slug: string
  initialData: Books
}

export default function BookDetails({ slug, initialData }: Props) {
  // quantity state
  const [quantity, setQuantity] = useState(1)

  // client global state
  const { addToCart } = useCartStore()
  const { wishlist, toggleWishlist } = useWishlistStore()
  const { setToast } = useToastStore()

  const mounted = useMounted()

  const { data, isLoading, isError } = useBook({ initialData, slug })

  if (isLoading || isError) return <BookDetailsSkeleton />

  const id = data.data[0].id
  const bookData = data.data[0].attributes
  const bookImageObj = bookData.image.data[0].attributes
  const authorName = bookData.author_id.data.attributes.name
  const categories: { name: string; slug: string }[] =
    bookData.categories.data.map(category => ({
      name: category.attributes.name,
      slug: category.attributes.slug,
    }))

  const handleAddToCart = () => {
    addToCart({ id, quantity })
    setToast({
      status: "success",
      message: "The book has been added to cart",
    })
  }

  const hasWishlisted = wishlist.find(item => item.id === id)
  const handleAddToWishlist = () => {
    setToast({
      status: hasWishlisted ? "info" : "success",
      message: `The book has been ${
        hasWishlisted ? "removed from" : "added to"
      } wishlist`,
    })
    toggleWishlist(id)
  }

  return (
    <div className="mb-12 flex flex-col gap-6 md:flex-row md:gap-10 lg:gap-16">
      <div
        className={`image-wrapper mx-auto w-full max-w-[20rem] rounded bg-skin-muted p-8 md:w-2/5 md:max-w-none md:self-start md:p-8 lg:p-16`}
      >
        <div className="relative h-72 w-full overflow-hidden transition-transform duration-500 hover:scale-110 md:h-80 xl:h-96">
          <Image
            src={bookImageObj.url}
            fill
            priority
            alt={bookData.title}
            className="object-contain"
          />
        </div>
      </div>
      <div className="md:w-3/5">
        <h1 className="text-xl font-bold md:text-2xl">{bookData.title}</h1>
        <div className="book-desc my-2 md:my-4">
          <ReactMarkdown>{bookData.description}</ReactMarkdown>
        </div>

        <hr className="my-4 md:my-6" />

        <div className="grid grid-cols-2 gap-y-2 md:grid-cols-3 md:gap-y-4 lg:grid-cols-4">
          <div>Author :</div>
          <div className="md:col-span-2 lg:col-span-3">{authorName}</div>

          <div>Categories :</div>
          <div className="md:col-span-2 lg:col-span-3">
            {categories.map((category, index) => (
              <span key={category.slug}>
                {index > 0 ? ", " : ""}
                <Link
                  href={`/categories/${category.slug}`}
                  className="text-link italic"
                >
                  {category.name}
                </Link>
              </span>
            ))}
          </div>

          <div>Availibility : </div>
          <div className="md:col-span-2 lg:col-span-3">
            {bookData.in_stock ? "In Stock" : "Waiting time 2 weeks"}
          </div>
        </div>

        <div className="my-4 flex justify-between md:my-6 md:flex-col-reverse md:gap-y-6">
          <div>
            <button
              type="button"
              title="Reduce Quantity"
              onClick={() => setQuantity(prev => prev - (prev > 1 ? 1 : 0))}
              className="rounded border bg-skin-muted px-2 text-2xl leading-none md:px-3 md:text-3xl"
            >
              -
            </button>
            <span className="mx-2 md:mx-4 md:text-2xl">{quantity}</span>
            <button
              type="button"
              title="Reduce Quantity"
              onClick={() => setQuantity(prev => prev + 1)}
              className="rounded border bg-skin-muted px-2 text-2xl leading-none md:px-3 md:text-3xl"
            >
              +
            </button>
          </div>
          <span className="text-xl font-semibold">
            MMK {bookData.price.toLocaleString()}
          </span>
        </div>

        <div className="my-6 flex flex-col-reverse gap-4 md:flex-row md:gap-8">
          <button
            type="button"
            onClick={handleAddToCart}
            className="primary-btn-color flex w-full items-center justify-center gap-x-4 rounded py-2 text-center text-lg font-medium"
          >
            Add To Cart
          </button>
          <button
            type="button"
            onClick={handleAddToWishlist}
            className="outline-btn-color flex w-full items-center justify-center gap-x-4 rounded border-2 py-2 text-center text-lg font-medium"
          >
            {mounted ? (
              <>
                <HeartIcon
                  className={`stroke-2 ${
                    hasWishlisted ? "fill-skin-accent stroke-skin-accent" : ""
                  }`}
                />
                {hasWishlisted ? "Wishlisted" : "Add To Wishlist"}
              </>
            ) : (
              <span className="flex gap-x-4">
                <LoadingIcon className="!mb-0 h-7 w-7" /> Loading ...
              </span>
            )}
          </button>
        </div>

        <SocialGroup className="!justify-start" />
      </div>
    </div>
  )
}
