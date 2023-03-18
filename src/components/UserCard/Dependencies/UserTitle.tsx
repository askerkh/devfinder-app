import { LocalGitHubUser } from "types"

interface UserTitleProps
  extends Pick<LocalGitHubUser, "name" | "login" | "created" | "url"> {}

const localDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
})

const UserTitle = ({ created, name, login, url }: UserTitleProps) => {
  return (
    <div className="flex w-full flex-col justify-between md:flex-row md:items-start">
      <div className="flex w-56 flex-col gap-4">
        <h2 className="text-2xl font-bold md:text-3xl">{name}</h2>
        <a
          href={url}
          className="text-2xl font-bold text-blue-600"
          target="_blank"
        >
          @{login}
        </a>
      </div>
      <h2 className="order-3 text-left text-lg text-gray-400 dark:text-slate-400 md:order-none md:text-right">
        Joined {localDate.format(new Date(created))}
      </h2>
    </div>
  )
}

export default UserTitle
