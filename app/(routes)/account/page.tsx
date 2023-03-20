import LoginForm from "./layouts/LoginForm"
import RegisterForm from "./layouts/RegisterForm"
import Breadcrumb from "@/components/Breadcrumb"

export const metadata = {
  title: "Account",
  openGraph: {
    title: "Account",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/account`,
  },
  twitter: { title: "Account" },
}

export default async function Page() {
  return (
    <main className="main-container">
      <Breadcrumb />
      <h1 className="font-serif text-2xl font-semibold capitalize">
        My Account
      </h1>
      <div className="my-8 flex flex-col divide-y-2 divide-skin-gray md:flex-row md:divide-y-0 md:divide-x-2">
        <LoginForm />
        <RegisterForm />
      </div>
    </main>
  )
}
