"use client"

import { useEffect } from "react"

// NextJS 13 app dir has problem
// with scrolling to top when navigate
// This is just a hot-fix
// Read more https://github.com/vercel/next.js/issues/42492
export default function ScrollUp() {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])

  return null
}
