import { ReactComponent as Moon } from "assets/icon-moon.svg"
import { ReactComponent as Sun } from "assets/icon-sun.svg"
import { useEffect, useState } from "react"

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "Dark")
}

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") == "Light" ? false : true,
  )
  const theme = isDark ? "Dark" : "Light"
  const Icon = isDark ? Moon : Sun

  useEffect(() => {
    if (isDark === true) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", theme)
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex items-center gap-2 text-xl uppercase hover:text-slate-300 dark:hover:text-slate-100"
    >
      <span>{theme}</span>
      <Icon fill={isDark ? "white" : "black"} />
    </button>
  )
}

export default ThemeSwitcher
