import CartItemSection from "app/(routes)/cart/layouts/CartItems"
import MobileCartTotal from "app/(routes)/cart/layouts/MobileCartTotal"

export const metadata = {
  title: "Cart",
  openGraph: {
    title: "Cart",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
  },
  twitter: { title: "Cart" },
}

export default function Page() {
  return (
    <>
      <main className="main-container">
        <CartItemSection />
      </main>
      <MobileCartTotal />
    </>
  )
}
