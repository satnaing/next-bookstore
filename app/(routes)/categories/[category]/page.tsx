import BooksContainer from "./layouts/BooksContainer"
// import { getBooksByCategory } from "@/lib/api"
import Breadcrumb from "@/components/Breadcrumb"
import { getBooksByCategory } from "@/store/server/books/queries"
import { getCategoryBySlug } from "@/store/server/categories/queries"

let mockBooks: number[] = []
for (let index = 1; index < 21; index++) {
  mockBooks.push(index)
}

type Props = {
  params: { category: string }
  searchParams: { page: number }
}

type MetaProps = {
  params: { category: string }
}

export async function generateMetadata({ params }: MetaProps) {
  const bookData = await getCategoryBySlug(params.category)
  const title = bookData.data[0].attributes.name
  console.log(bookData)
  return {
    title,
    openGraph: {
      title,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/categories/${params.category}`,
    },
    twitter: { title },
  }
}

export default async function Page({ params, searchParams }: Props) {
  const currentPage = Number(searchParams.page) || 1

  const initialData = await getBooksByCategory({
    slug: params.category,
    pageNum: currentPage,
  })

  return (
    <main className="main-container">
      <Breadcrumb />
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
