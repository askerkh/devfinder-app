interface InfoItemProps {
  text?: string | null
  children: React.ReactNode
  isLink?: boolean
  Link?: string
}

const InfoItem = ({ children, text, isLink, Link }: InfoItemProps) => {
  return (
    <div className="flex items-center">
      {children}
      {isLink && text ? (
        <a
          href={Link}
          className="text-xs text-blue-500 md:text-base"
          target="_blank"
        >
          {text || "Undefined"}
        </a>
      ) : (
        <h2 className="text-xs text-gray-400 dark:text-white md:text-base">
          {text || "Undefined"}
        </h2>
      )}
    </div>
  )
}

export default InfoItem
