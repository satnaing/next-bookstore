import TopBar from "@/common-layouts/TopBar"
import NavBar from "@/common-layouts/NavBar"
import Footer from "@/common-layouts/Footer"
import { getBooksByCategory } from "app/api"
import BooksContainer from "./layouts/BooksContainer"

let mockBooks: number[] = []
for (let index = 1; index < 21; index++) {
  mockBooks.push(index)
}

type Props = {
  params: { category: string }
  searchParams: { page: number }
}

export default async function Page({ params, searchParams }: Props) {
  const currentPage = Number(searchParams.page) || 1

  const initialData = await getBooksByCategory(params.category, currentPage)

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <NavBar />
      <main className="padding-x max-width py-6">
        <h1 className="text-2xl font-bold capitalize">{params.category}</h1>
        <BooksContainer
          initialData={initialData}
          category={params.category}
          currentPage={currentPage}
        />
      </main>
      <Footer />
    </div>
  )
}
