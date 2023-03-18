interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col text-black dark:text-white">
      {children}
    </div>
  )
}

export default Container
