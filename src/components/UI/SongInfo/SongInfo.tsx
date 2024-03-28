import { AppHeading } from "../AppHeading/AppHeading";
import "./SongInfo.css";
interface ILyricsInfoText {
  songName: string;
  artistName: string | undefined;
  lyricsText: string | undefined;
}

export const SongInfo = ({
  songName,
  artistName,
  lyricsText,
}: ILyricsInfoText) => {
  return (
    <>
      <div className="info">
        <div className="music-details">
          <div>
            <p className="song-name">{songName}</p>
            <p className="artist-name">{artistName}</p>
          </div>
        </div>
        <hr />
        <AppHeading headingText="Song Text" headingType="h3" />
        <p className="lyrics-text">{lyricsText}</p>
      </div>
    </>
  );
};
