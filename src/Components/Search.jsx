"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchBar({ placeholder = "Search Services", onSearch = () => {} }) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <div className="w-full bg-green-500 p-4">
      <form onSubmit={handleSubmit} className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border-0 bg-white px-4 py-3 text-gray-600 shadow-sm outline-none focus:ring-2 focus:ring-green-300"
        />
        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <Search className="h-5 w-5" />
        </button>
      </form>
    </div>
  )
}
