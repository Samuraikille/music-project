import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { AppHeading } from "../UI/AppHeading/AppHeading";
import { KindMix } from "../KindMix/KindMix";
import "./MusicPage.css"

export const MusicPage = () => {
    const user = useSelector((state: RootState) => state.userSlice.user);
    return (
        <div className="Page">
            <AppHeading headingText={`Добро пожаловать ${user?.name}` } headingType={"h1"} />
            <KindMix/>
        </div>
    )
}