import Search from "components/Search"
import Container from "components/UI/Container"
import Header from "components/UI/Header"
import UserCard from "components/UserCard/UserCard"
import { UserDefault } from "mock"
import { useState } from "react"
import { GitHubError, GitHubUser, LocalGitHubUser } from "types"
import { extractLocalUser } from "utils/extract-user-local"
import { isGitHubUser } from "utils/typeguards"

const BASE_URL = "https://api.github.com/users/"

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null>(UserDefault)

  const fetchUser = async (username: string) => {
    const res = await fetch(`${BASE_URL}${username}`)
    const user = (await res.json()) as GitHubUser | GitHubError

    if (isGitHubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }

  return (
    <Container>
      <Header />
      <Search error={!user} onSubmit={fetchUser} />
      {user && <UserCard {...user} />}
    </Container>
  )
}

export default App
