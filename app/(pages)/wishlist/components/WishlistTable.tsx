"use client"

import Image from "next/image"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import CancelIcon from "@/icons/CancelIcon"
import scrollToTop from "@/utils/scrollToTop"
import { getBooksByIds } from "@/lib/api"
import { useMounted } from "@/hooks"
import {
  useCartStore,
  useToastStore,
  useWishlistStore,
  WishlistItem,
} from "@/lib/store"

const fetchBooks = async (wishlistIds: number[]): Promise<WishlistItem[]> => {
  const response = await getBooksByIds(wishlistIds)
  const data = response.data

  const withlist = data.map(item => {
    const { slug, title, price, image, in_stock } = item.attributes
    return {
      id: item.id,
      slug: slug,
      image: image.data[0].attributes.url,
      title: title,
      price: price,
      inStock: in_stock,
    }
  })

  return withlist
}

export default function WishlistTable() {
  const { wishlist, toggleWishlist } = useWishlistStore()
  const { addToCart } = useCartStore()
  const { setToast } = useToastStore()

  const wishlistIds = wishlist.map(item => item.id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ["wishlist", { wishlistIds }],
    queryFn: () => fetchBooks(wishlistIds),
    initialData: wishlist,
  })

  const mounted = useMounted()

  if (isLoading) return null
  if (isError) return null

  const handleAddToCart = (id: number) => {
    addToCart({ id, quantity: 1 })
    setToast({
      status: "success",
      message: "The book has been added to cart",
    })
    toggleWishlist(id)
  }

  const removeFromWishlist = (id: number) => {
    toggleWishlist(id)
    setToast({
      status: "success",
      message: "The book has been removed from wishlist",
    })
  }

  return (
    <div
      onLoad={() => scrollToTop()}
      className="wishlist-table h-[70vh] overflow-y-auto rounded md:h-96"
    >
      <table className="w-full">
        <thead className="sticky top-0 z-10 hidden bg-skin-fill font-sans font-semibold shadow-sm md:table-header-group">
          <tr>
            <th colSpan={2} className="py-1">
              Book Title
            </th>
            <th className="w-[14.5%] py-1">Status</th>
            <th className="w-[15.5%] py-1 md:text-right">Price</th>
            <th colSpan={2} className="w-[28.25%] py-1">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {!mounted || data.length < 1 ? (
            <tr>
              <td colSpan={6} className="h-80 w-full text-center">
                <span>
                  {mounted ? "Wishlist is empty!" : "Wishlist is loading"}
                </span>
              </td>
            </tr>
          ) : (
            data.map(item => (
              <tr
                key={item.id}
                className="grid grid-cols-[auto_2fr_auto] grid-rows-[2fr_1fr_1fr_1fr] gap-x-2 border-b py-2 font-sans md:table-row"
              >
                <td className="row-span-4 w-32 pl-2 md:w-20">
                  <div className="relative h-44 w-full md:h-36">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 640px) 20vw, 50vw"
                      className="md:py-2"
                    />
                  </div>
                </td>
                <td className="col-start-2 row-start-1 md:max-w-[10rem] md:pl-2">
                  <Link
                    href={`/item/${item.slug}`}
                    className="font-medium italic underline decoration-skin-dark decoration-dashed underline-offset-2 opacity-75 line-clamp-2 hover:decoration-solid hover:opacity-100 md:!inline md:line-clamp-4"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="col-span-2 col-start-2 row-start-2 md:text-center">
                  <span className="md:hidden">Status: </span>
                  <span className="font-medium italic">
                    {item.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="col-span-2 col-start-2 row-start-3 md:text-right">
                  <span className="md:hidden">Price: </span>
                  <span className="font-medium">
                    {item.price.toLocaleString()} Ks
                  </span>
                </td>
                <td className="col-span-2 col-start-2 row-start-4 md:text-right">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item.id)}
                    className="rounded border-2 border-skin-accent py-1 px-2 text-sm font-medium text-skin-accent hover:bg-skin-fill"
                  >
                    Add To Cart
                  </button>
                </td>
                <td className="col-span-1 col-start-3 row-span-1 row-start-1 md:text-center">
                  <button
                    title="Remove"
                    type="button"
                    onClick={() => {
                      removeFromWishlist(item.id)
                    }}
                  >
                    <CancelIcon className="stroke-slate-600 hover:stroke-2" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
