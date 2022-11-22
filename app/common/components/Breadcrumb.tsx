import Link from "next/link"

const Breadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="flex gap-x-2">
        <li className="after:ml-2 after:content-['>']">
          <Link href="/">Home</Link>
        </li>
        <li className="after:ml-2 after:content-['>']">
          <Link href="/categories">Categories</Link>
        </li>
        <li aria-current="page">Classic</li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
