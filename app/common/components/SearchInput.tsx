"use client"

import SearchIcon from "@/icons/SearchIcon"

type Props = {
  className?: string
}

const SearchInput = ({ className = "" }: Props) => {
  return (
    <label className={`relative block ${className}`}>
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 right-0 flex items-center rounded-r bg-skin-accent px-2">
        <SearchIcon className="stroke-white stroke-2" />
      </span>
      <input
        className="block w-full rounded border border-skin-card bg-skin-fill py-2 pl-3 pr-12 shadow-sm placeholder:italic placeholder:text-slate-400 focus:shadow focus:outline-none focus:ring-1 focus:ring-skin-card sm:text-sm"
        placeholder="Search for any books..."
        type="text"
        name="search"
      />
    </label>
  )
}

export default SearchInput
