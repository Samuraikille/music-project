import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AppHeading } from "../UI/AppHeading/AppHeading";
import { KindMix } from "../KindMix/KindMix";
import "./MusicPage.css"
import BasicMenu from "../Menu/Menu";
import { ArtistMix } from "../ArtistMix/ArtistMix";
import { MusicTop } from "../MusicTop/MusicTop";


export const MusicPage = () => {
    const user = useSelector((state: RootState) => state.userSlice.user);
    return (
        <div className="Page">
            <div className="welcome">
              <AppHeading headingText={`Добро пожаловать ${user?.name}` } headingType={"h1"} />
              <BasicMenu/> 
            </div>
            <KindMix/>
            <ArtistMix/>
            <MusicTop/>
        </div>
    )
}