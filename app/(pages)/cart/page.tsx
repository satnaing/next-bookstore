import CartItems from "@/common-components/CartItems"
import CartTotalMobile from "@/common-components/CartTotalMobile"

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
