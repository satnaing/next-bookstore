import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import Breadcrumb from "@/common-components/Breadcrumb"

export default async function Page() {
  return (
    <main className="main-container">
      <Breadcrumb />
      <h1 className="font-serif text-2xl font-semibold capitalize">
        My Account
      </h1>
      <div className="divide-skin-[#DCD8D2] my-8 flex flex-col divide-y-2 md:flex-row md:divide-y-0 md:divide-x-2">
        <LoginForm />
        <RegisterForm />
      </div>
    </main>
  )
}
