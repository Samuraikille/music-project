import { AppHeading } from "../UI/AppHeading/AppHeading";
import { MixElem } from "../UI/MixElem/MixElem";
import { MixData } from "./data";
import './KindMix.css'

export const KindMix = () => {
    return (
        <>
        <AppHeading headingText={"Твои лучшие миксы"} headingType={"h2"} />
        <div className="MixBlock">
        
        {MixData && MixData.map((elem)=> (
          <MixElem
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
  