"use client"

import Image from "next/image"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import CancelIcon from "@/icons/CancelIcon"
import LoadingIcon from "@/icons/LoadingIcon"
import EmptyBoxIcon from "@/icons/EmptyBoxIcon"
import { getOptimizedImage } from "@/utils/utilFuncs"
import { useMounted } from "@/hooks"
import {
  useCartStore,
  useToastStore,
  useWishlistStore,
  WishlistItem,
} from "@/store/client"
import { getBooks } from "@/store/server/books/queries"

const fetchBooks = async (wishlistIds: number[], wishlist: WishlistItem[]) => {
  const response = await getBooks({ ids: wishlistIds })
  const data = response.data

  // Timestamp Mapping
  const timestampMap = new Map<number, number>()
  wishlist.forEach(item => {
    timestampMap.set(item.id, item.timestamp || 1)
  })

  const withlist = data
    .map(item => {
      const { slug, title, price, image, in_stock } = item.attributes
      return {
        id: item.id,
        slug: slug,
        image: getOptimizedImage(image),
        title: title,
        price: price,
        inStock: in_stock,
        timestamp: timestampMap.get(item.id) || 1,
      }
    })
    .sort((a, b) => b.timestamp - a.timestamp)

  return withlist
}

export default function WishlistTable() {
  const { wishlist, toggleWishlist } = useWishlistStore()
  const { addToCart } = useCartStore()
  const { setToast } = useToastStore()

  const wishlistIds = wishlist.map(item => item.id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ["wishlist", { wishlistIds }],
    queryFn: () => fetchBooks(wishlistIds, wishlist),
    keepPreviousData: true,
  })

  const mounted = useMounted()

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
    <div className="wishlist-table overflow-y-auto rounded md:h-96">
      <table className="w-full">
        <thead className="sticky top-0 z-10 hidden bg-skin-muted font-sans font-semibold shadow-sm md:table-header-group">
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
          {!mounted || wishlist.length < 1 ? (
            <tr>
              <td colSpan={6} className="h-80 w-full text-center">
                <div className="flex flex-col items-center">
                  {mounted ? <EmptyBoxIcon /> : <LoadingIcon mb />}
                  <span>
                    {mounted ? "Wishlist is empty!" : "Wishlist is loading..."}
                  </span>
                </div>
              </td>
            </tr>
          ) : (
            !isLoading &&
            data.map(item => (
              <tr
                key={item.id}
                className="grid grid-cols-[auto_2fr_auto] grid-rows-[2fr_1fr_1fr_1fr] gap-x-2 border-b py-2 font-sans md:table-row"
              >
                <td className="row-span-4 w-32 pl-2 md:w-28">
                  <div className="relative h-44 w-full md:h-36">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 640px) 20vw, 50vw"
                      className="object-contain md:py-2"
                    />
                  </div>
                </td>
                <td className="col-start-2 row-start-1 md:max-w-[10rem] md:pl-4">
                  <Link
                    href={`/item/${item.slug}`}
                    className="text-link font-medium italic line-clamp-2 md:!inline md:line-clamp-4"
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
                    className="outline-btn-color rounded py-1 px-2 text-sm font-medium"
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
