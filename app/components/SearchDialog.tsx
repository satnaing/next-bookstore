"use client"

import { ChangeEvent, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import SearchIcon from "@/icons/SearchIcon"
import { getOptimizedImage } from "@/utils/utilFuncs"
import { useDebounce } from "@/hooks"
import { useBooks } from "@/store/server/books/queries"
import { Books } from "@/store/server/books/types"

const SearchDialog = () => {
  const [open, setOpen] = useState(false)
  // Search term
  const [searchTerm, setSearchTerm] = useState("")

  // Search result
  const [result, setResult] = useState<Books | null>(null)

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useDebounce(
    searchTerm,
    500
  )

  const { data } = useBooks({
    filter: { searchTerm },
    enabled: Boolean(debouncedSearchTerm),
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    searchTerm.length < 2 ? setResult(null) : setResult(data || null)
  }, [data, debouncedSearchTerm, searchTerm])

  const handleDialog = () => {
    setResult(null)
    setDebouncedSearchTerm("")
    setOpen(prevState => !prevState)
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleDialog}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Search"
          className="flex h-full items-center gap-x-2 py-1 pl-1 pr-2"
        >
          <SearchIcon /> <span className="hidden md:inline">Search</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-skin-dark bg-opacity-70 backdrop-blur-sm" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/4 bottom-3/4 left-1/2 z-30 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-none focus:outline-none">
          <div className="flex w-full justify-between">
            <label className="relative block w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 opacity-75">
                <SearchIcon />
              </span>
              <input
                placeholder="Find your next favourite book"
                type="text"
                onChange={e => handleInput(e)}
                className="block w-full rounded border-2 border-skin-base 
        border-opacity-40 bg-skin-base py-3 pl-10
        pr-16 caret-skin-accent placeholder:italic 
        placeholder:text-opacity-75 focus:border-skin-accent focus:outline-none"
              />

              <Dialog.Close asChild>
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 my-auto mr-3 hidden h-6 w-6 appearance-none items-center justify-center rounded border border-slate-200 px-5 text-skin-dark shadow-md hover:border-slate-300 active:bg-slate-100 md:flex"
                  aria-label="Close"
                >
                  Esc
                </button>
              </Dialog.Close>
            </label>
          </div>
          {result && result.data.length < 1 ? (
            <div
              className={`mt-2 flex h-24 items-center justify-center rounded bg-skin-base p-2`}
            >
              <div>
                <span className="opacity-80">No results for </span>
                <span className="font-bold">{`"${searchTerm}"`}</span>
              </div>
            </div>
          ) : (
            <div
              className={`mt-2 h-80 rounded bg-skin-base p-2 ${
                result ? "block" : "hidden"
              }`}
            >
              <ul className="wishlist-table h-full overflow-auto">
                {result?.data.map(({ id, attributes }) => {
                  const { slug, price, title, image, author_id } = attributes
                  return (
                    <li key={id}>
                      <Link
                        href={`item/${slug}`}
                        onClick={() => setOpen(false)}
                        className="mb-1 flex gap-x-4 rounded p-2 hover:bg-skin-muted hover:bg-opacity-50"
                      >
                        <div className="relative h-32 w-28 overflow-hidden">
                          <Image
                            src={getOptimizedImage(image)}
                            alt={title}
                            fill
                            sizes="
                          (min-width: 1024px) 20vw,
                          (min-width: 768px) 25vw,
                          (min-width: 640px) 33vw,
                          50vw"
                            className="object-contain"
                          />
                        </div>
                        <div className="flex w-full flex-col justify-around">
                          <div className="h-5 text-ellipsis line-clamp-1">
                            {title}
                          </div>
                          <div className="text-sm italic opacity-75">
                            by {author_id?.data?.attributes.name}
                          </div>
                          <div>MMK {price.toLocaleString()}</div>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SearchDialog
