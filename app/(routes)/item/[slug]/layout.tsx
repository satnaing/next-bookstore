import { getBook } from "@/store/server/books/queries"

type MetaProps = {
  params: { slug: string }
}

export async function generateMetadata({ params }: MetaProps) {
  const bookData = await getBook(params.slug)
  const title = bookData.data[0].attributes.title

  return {
    title,
    openGraph: {
      title,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/item/${params.slug}`,
    },
    twitter: { title },
  }
}

export default function ItemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="main-container">{children}</main>
}
