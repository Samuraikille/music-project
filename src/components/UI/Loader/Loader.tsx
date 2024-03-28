import { AppHeading } from "../AppHeading/AppHeading"
import "./Loader.css"
interface ILoading  {
    title: string;
}
export const Loader = ({title}:ILoading) => {
    return (
       <div className="loader">
        <img src="./img/loading.png" alt="loader"/>
        <AppHeading headingText={title || "Loading..."} headingType="h1"/>
       </div> 
    )
}