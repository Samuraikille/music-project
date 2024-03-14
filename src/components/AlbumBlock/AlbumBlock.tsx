import { AlbumElem } from "../UI/AlbumElem/AlbumElem";
import "./AlbumBlock.css"
export const AlbumBlock = () => {
  return (
    <div className="AlbumBlock">
      <AlbumElem
        imgSource={"./img/playlist.png"}
        altText={"Playlist"}
        mainText={"Недавно слушали"}
        secondaryText={"Плейлист • Genius"}
      />
      <AlbumElem
        imgSource={"./img/audio.png"}
        altText={"Playlist"}
        mainText={"Недавно искали"}
        secondaryText={"Плейлист • Genius"}
      />
    </div>
  );
};
