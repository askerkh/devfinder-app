interface ButtonProps {
  children: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="flex-shrink-0 cursor-pointer rounded-xl border-none bg-blue-500 py-3 px-6 text-base text-white transition-all hover:bg-blue-400"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
