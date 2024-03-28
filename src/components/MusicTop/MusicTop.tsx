
import { AppHeading } from "../UI/AppHeading/AppHeading";
import { MusicElem } from "../UI/MusicElem/MusicElem";
import { MusicData } from "./data";
import "./MusicTop.css"
export const MusicTop = () => {
    return (
        <>
        <AppHeading headingText={"Топ-5 мировых хитов"} headingType={"h2"} />
        <div className="musicTop">
        
        {MusicData && MusicData.map((elem)=> (
          <MusicElem
            numberText={elem.numberText}
            imgSource={elem.imgSource}
            altText={elem.altText}
            mainText={elem.mainText}
            secondaryText={elem.secondaryText}
          />
        ))}
      </div>
        </>
      
    );
  };