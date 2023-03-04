import Link from "next/link"

export default async function Page() {
  return (
    <main className="main-container">
      <h1 className="text-2xl font-bold capitalize">My Account</h1>
      <div className="divide-skin-[#DCD8D2] my-8 flex flex-col divide-y-2 md:flex-row md:divide-y-0 md:divide-x-2">
        <section className="flex-1 pb-8 md:pb-0 md:pr-10 xl:pr-20">
          <h2 className="text-xl font-bold">Login</h2>
          <form action="" className="mt-4">
            <label className="font-sans font-medium">
              Email Address
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                className="mt-1 mb-4 block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2 font-normal outline-skin-accent"
              />
            </label>
            <label className="font-sans font-medium">
              Password
              <input
                type="password"
                placeholder="Password"
                className="mt-1 mb-4 block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2 font-normal outline-skin-accent"
              />
            </label>
            <div className="mb-4">
              <Link
                href=""
                className="font-sans text-sm opacity-75 hover:opacity-100"
              >
                Forgot your password?
              </Link>
            </div>
            <button
              type="submit"
              className="rounded bg-skin-accent py-2 px-8 font-sans font-medium text-skin-base md:py-1 md:px-5"
            >
              Login
            </button>
          </form>
        </section>
        <section className="flex-1 pt-8 md:pt-0 md:pl-10 xl:pl-20">
          <h2 className="text-xl font-bold">Register</h2>
          <form action="" className="mt-4">
            <label className="font-sans font-medium">
              Full Name
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 mb-4 block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2 font-normal outline-skin-accent"
              />
            </label>
            <label className="font-sans font-medium">
              Email Address
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                className="mt-1 mb-4 block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2 font-normal outline-skin-accent"
              />
            </label>
            <label className="font-sans font-medium">
              Username
              <input
                type="text"
                placeholder="johndoe"
                className="mt-1 mb-4 block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2 font-normal outline-skin-accent"
              />
            </label>
            <label className="font-sans font-medium">
              Password
              <input
                type="password"
                placeholder="Password"
                className="mt-1 mb-4 block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2 font-normal outline-skin-accent"
              />
            </label>
            <label className="font-sans font-medium">
              Confirm Password
              <input
                type="password"
                placeholder="Confirm Password"
                className="mt-1 mb-4 block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2 font-normal outline-skin-accent"
              />
            </label>
            <label className="font-sans font-medium">
              Address
              <textarea
                placeholder="No (27), 11 M, Hledan, Yangon"
                rows={4}
                className="mt-1 mb-4 block w-full rounded border-2 border-[#DCD8D2] bg-skin-base py-1 px-2 font-normal outline-skin-accent"
              ></textarea>
            </label>
            <button
              type="submit"
              className="mt-4 rounded bg-skin-accent py-2 px-8 font-sans font-medium text-skin-base md:py-1 md:px-5"
            >
              Register
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
