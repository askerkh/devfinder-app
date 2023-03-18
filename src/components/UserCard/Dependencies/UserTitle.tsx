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
    <div className="flex w-full justify-between md:items-start">
      <div className="flex w-56 flex-col gap-4">
        <h2 className="text-3xl font-bold">{name}</h2>
        <a
          href={url}
          className="text-2xl font-bold text-blue-600"
          target="_blank"
        >
          @{login}
        </a>
      </div>
      <h2 className="text-lg text-gray-400 dark:text-slate-400">
        Joined {localDate.format(new Date(created))}
      </h2>
    </div>
  )
}

export default UserTitle
