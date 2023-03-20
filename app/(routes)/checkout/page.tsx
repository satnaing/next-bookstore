import CheckoutSection from "./layouts/CheckoutSection"

export const metadata = {
  title: "Checkout",
  openGraph: {
    title: "Checkout",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
  },
  twitter: { title: "Checkout" },
}

export default function Page() {
  return (
    <>
      <main className="main-container">
        <CheckoutSection />
      </main>
    </>
  )
}
