import { AppHeading } from "../UI/AppHeading/AppHeading";
import "./Header.css"


export const Header = () => {
  return (
    <div className="Header">
      <img src="./img/music-note.png" alt="Logo" />
      <AppHeading headingText={"Genius"} headingType={"h1"} />
    </div>
  );
};
