import { ReactComponent as Icon } from "assets/icon-search.svg"
import React, { useState } from "react"
import Button from "./UI/Button"

interface SearchProps {
  error: boolean
  onSubmit: (text: string) => void
}

const Search = ({ error, onSubmit }: SearchProps) => {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onSubmit(text)
      setText("")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="relative flex w-full items-center overflow-hidden rounded-2xl bg-white p-3 pl-4 shadow-2xl dark:bg-slate-800 md:pl-7"
    >
      <label htmlFor="search" className="mr-5 cursor-pointer">
        <Icon />
      </label>
      <input
        type="text"
        value={text}
        className="h-14 max-w-[calc(100%-120px)] flex-grow-[5] cursor-pointer border-none bg-white py-2 text-xs text-slate-500 outline-none placeholder:text-gray-400 dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-400 md:my-5 md:text-xl"
        id="search"
        name="username"
        onChange={(e) => setText(e.target.value)}
        placeholder="Search GitHub username..."
      />
      {error && (
        <div className="absolute right-[25%] top-[35%] bottom-1 text-base font-bold text-red-500 md:right-[17%] md:top-[60%] md:bottom-0 md:translate-y-[-50%]">
          No result
        </div>
      )}
      <Button>Search</Button>
    </form>
  )
}

export default Search
