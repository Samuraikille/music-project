import { AppHeading } from "../UI/AppHeading/AppHeading";
import { MixElem } from "../UI/MixElem/MixElem";
import { ArtistData } from "./data";

export const ArtistMix = () => {
    return (
        <>
        <AppHeading headingText={"Твои лучшие миксы"} headingType={"h2"} />
        <div className="MixBlock">
        
        {ArtistData && ArtistData.map((elem)=> (
          <MixElem
            imgSource={elem.imgSource}
            altText={elem.altText}
            mainText={elem.mainText}
          />
        ))}
      </div>
        </>
      
    );
  };