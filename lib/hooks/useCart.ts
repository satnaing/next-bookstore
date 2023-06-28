import { useQuery } from "@tanstack/react-query"
import { getOptimizedImage } from "@/utils/utilFuncs"
import { useCartStore } from "@/store/client"
import { getBooks } from "@/store/server/books/queries"

export const useCart = () => {
  // Client Global State
  const { cart } = useCartStore()

  // Server State
  const cartIds = cart.map(item => item.id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cart", { cartIds }],
    queryFn: () => getBooks({ ids: cartIds }),
    keepPreviousData: true,
  })

  if (cart.length < 1)
    return { cartData: [], totalPrice: "0", totalQuantity: 0 }

  if (isLoading || isError)
    return {
      cartData: [],
      totalPrice: "0",
      totalQuantity: 0,
      isLoading,
      isError,
    }

  // Quantity Mapping
  const qtyMap = new Map<number, number>()
  cart.forEach(item => {
    qtyMap.set(item.id, item.quantity)
  })

  // Timestamp Mapping
  const timestampMap = new Map<number, number>()
  cart.forEach(item => {
    timestampMap.set(item.id, item.timestamp || 1)
  })

  const cartData = data.data
    .map(item => {
      const { title, slug, price, image } = item.attributes
      return {
        id: item.id,
        title,
        price,
        slug,
        image: getOptimizedImage(image),
        quantity: qtyMap.get(item.id) || 1,
        timestamp: timestampMap.get(item.id) || 1,
      }
    })
    .sort((a, b) => b.timestamp - a.timestamp)

  let totalPrice = "0"
  let totalQuantity = 0

  if (cartData) {
    totalPrice = cartData
      .reduce(
        (accumulator: number, currentItem) =>
          accumulator + currentItem.price * currentItem.quantity,
        0
      )
      .toLocaleString()
  }

  totalQuantity = cart.reduce(
    (accumulator: number, currentItem) => accumulator + currentItem.quantity,
    0
  )

  return { cartData, totalPrice, totalQuantity, isLoading, isError }
}
