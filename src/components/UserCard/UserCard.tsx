import { LocalGitHubUser } from "types"
import UserInfo from "./Dependencies/UserInfo"
import UserStat from "./Dependencies/UserStat"
import UserTitle from "./Dependencies/UserTitle"

interface UserCardProps extends LocalGitHubUser {}

const UserCard = ({
  avatar,
  bio,
  blog,
  company,
  created,
  followers,
  following,
  id,
  location,
  login,
  name,
  repos,
  twitter,
  url,
}: UserCardProps) => {
  return (
    <section className="mt-8 flex h-max w-full flex-col items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-2xl dark:bg-slate-800 md:flex-row md:items-start">
      <div className="w-[30%]">
        <img className="w-48 rounded-full" src={avatar} alt="user_avatar" />
      </div>
      <div className="flex w-full flex-col gap-8 md:w-[70%]">
        <UserTitle created={created} login={login} name={name} url={url} />
        <p className="text-left text-xl text-gray-400 dark:text-slate-400">
          {bio || "This profile has no bio"}
        </p>
        <UserStat followers={followers} following={following} repos={repos} />
        <UserInfo
          blog={blog}
          company={company}
          location={location}
          twitter={twitter}
        />
      </div>
    </section>
  )
}

export default UserCard
