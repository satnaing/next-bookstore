import CartItems from "@/components/CartItems"
import CartTotalMobile from "@/components/CartTotalMobile"

export default function Page() {
  return (
    <>
      <main className="main-container">
        <CartItems />
      </main>
      <CartTotalMobile />
    </>
  )
}
