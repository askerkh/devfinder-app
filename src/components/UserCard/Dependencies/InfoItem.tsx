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
        <a href={Link} className="text-base text-blue-500" target="_blank">
          {text || "Undefined"}
        </a>
      ) : (
        <h2 className="text-base text-gray-400 dark:text-white">
          {text || "Undefined"}
        </h2>
      )}
    </div>
  )
}

export default InfoItem
