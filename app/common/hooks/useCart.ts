import { useQuery } from "@tanstack/react-query"
import { getBooksByIds } from "app/api"
import { useCartStore } from "../../../lib/store"
import { Book } from "../types/bookQuery.types"

const useCart = () => {
  // Client Global State
  const { cart } = useCartStore()

  // Server State
  const cartIds = cart.map(item => item.id)
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cart", { cartIds }],
    queryFn: () => getBooksByIds(cartIds),
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

  const map = new Map<number, number>()
  cart.forEach(item => {
    map.set(item.id, item.quantity)
  })

  const cartData = data.data.map(item => {
    const { title, slug, price, image } = item.attributes
    return {
      id: item.id,
      title,
      price,
      slug,
      image: image.data[0].attributes.url,
      quantity: map.get(item.id) || 1,
    }
  })

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

export default useCart
