import { AppHeading } from "../AppHeading/AppHeading"
import "./Error.css"

export const Error = () => {
  return (
    <div className='error'>
        <AppHeading headingText={"Something went wrong. Please try again"} headingType={"h1"} />
    </div>
  )
}
