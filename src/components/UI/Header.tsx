import ThemeSwitcher from "./ThemeSwitcher"

const Header = () => {
  return (
    <div className="my-8 flex items-center justify-between">
      <div className="cursor-pointer select-none text-3xl font-bold text-gray-300 dark:text-white">
        Devfinder
      </div>
      <ThemeSwitcher />
    </div>
  )
}

export default Header
