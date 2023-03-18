import { GitHubUser } from "./../types/user"
import { GitHubError } from "types"
export const isGitHubUser = (user: any): user is GitHubUser => {
  return user?.id !== undefined
}
