import BooksContainer from "./layouts/BooksContainer"
import { getBooksByCategory } from "app/api"

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
    <main className="main-container">
      <h1 className="font-serif text-2xl font-semibold capitalize">
        {params.category}
      </h1>
      <BooksContainer
        initialData={initialData}
        category={params.category}
        currentPage={currentPage}
      />
    </main>
  )
}
