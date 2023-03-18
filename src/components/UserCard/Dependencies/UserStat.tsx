import { LocalGitHubUser } from "types"

interface UserStatProps
  extends Pick<LocalGitHubUser, "repos" | "followers" | "following"> {}

const UserStat = ({ repos, followers, following }: UserStatProps) => {
  return (
    <div className="flex h-max w-full justify-between gap-8 rounded-xl bg-gray-100 px-4 py-4 text-left dark:bg-gray-600">
      <section className="flex flex-col gap-2">
        <h1 className="text-xs text-gray-400 dark:text-slate-400 md:text-xl">
          Repos
        </h1>
        <h2 className="text-3xl">{repos}</h2>
      </section>
      <section className="flex flex-col gap-2">
        <h1 className="text-xs text-gray-400 dark:text-slate-400 md:text-xl">
          Followers
        </h1>
        <h2 className="text-3xl">{followers}</h2>
      </section>
      <section className="flex flex-col gap-2">
        <h1 className="text-xs text-gray-400 dark:text-slate-400 md:text-xl">
          Following
        </h1>
        <h2 className="text-3xl">{following}</h2>
      </section>
    </div>
  )
}

export default UserStat
