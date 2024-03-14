import { Link } from "react-router-dom"
import { AppHeading } from "../UI/AppHeading/AppHeading"
import "./MainBlock.css"

export const MainBlock = () => {
  return (
    <div className="MainBlock">
      <Link to={"/main"}><AppHeading headingText={"Главная"} headingType={"h3"} /></Link>
      <Link to={"/search"}><AppHeading headingText={"Поиск"} headingType={"h3"} /></Link>
    </div>
  )
}
  