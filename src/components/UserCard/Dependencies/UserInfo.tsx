import { ReactComponent as BlogIcon } from "assets/icon-website.svg"
import { ReactComponent as CompanyIcon } from "assets/icon-company.svg"
import { ReactComponent as TwitterIcon } from "assets/icon-twitter.svg"
import { ReactComponent as LocationIcon } from "assets/icon-location.svg"

import { LocalGitHubUser } from "types"
import InfoItem from "./InfoItem"

interface UserInfoProps
  extends Pick<LocalGitHubUser, "blog" | "company" | "location" | "twitter"> {}

const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
  return (
    <div className="flex w-full justify-between px-4 sm:justify-start sm:gap-20">
      <div className="flex flex-col gap-4 text-left">
        <InfoItem text={blog} isLink Link={`http://${blog}`}>
          <BlogIcon className="mr-2 w-6 fill-blue-400 md:mr-6" />
        </InfoItem>
        <InfoItem text={company}>
          <CompanyIcon className="mr-2 w-6 fill-blue-400 md:mr-6" />
        </InfoItem>
      </div>
      <div className="flex flex-col gap-4">
        <InfoItem text={location}>
          <LocationIcon className="mr-2 w-6 fill-blue-400 md:mr-6" />
        </InfoItem>
        <InfoItem text={twitter} isLink Link={`https://twitter.com/${twitter}`}>
          <TwitterIcon className="mr-2 w-6 fill-blue-400 md:mr-6" />
        </InfoItem>
      </div>
    </div>
  )
}

export default UserInfo
