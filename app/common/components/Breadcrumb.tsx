"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Breadcrumb = () => {
  const pathName = usePathname()
  const breadcrumbList = pathName?.split("/").filter(n => n) || []

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb mb-2">
      <ul className="flex gap-x-2 text-skin-dark">
        <li className="after:ml-2 after:opacity-60 after:content-['>']">
          <Link href="/" className="opacity-60 hover:opacity-100">
            Home
          </Link>
        </li>
        {breadcrumbList.map((breadcrumb, index) =>
          index + 1 === breadcrumbList.length ? (
            <li
              key={breadcrumb}
              aria-current="page"
              className="capitalize opacity-100"
            >
              {breadcrumb}
            </li>
          ) : (
            <li
              key={breadcrumb}
              className="after:ml-2 after:opacity-60 after:content-['>']"
            >
              <Link
                href={`/${breadcrumb}`}
                className="capitalize opacity-60 hover:opacity-100"
              >
                {breadcrumb}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}

export default Breadcrumb
