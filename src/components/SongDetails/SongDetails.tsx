import { useParams } from "react-router-dom";
import "./SongDetails.css";
import BasicMenu from "../Menu/Menu";
import { SongInfo } from "../UI/SongInfo/SongInfo";
import { useGetSongsDetailsQuery } from "../../store/api/searchApi";

export const SongDetails = () => {
  const { id } = useParams(); // Получаем параметр id из URL
  const { data: songDetails, isLoading, isError } = useGetSongsDetailsQuery(`${id}`); // Отправляем запрос на сервер, используя id

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Sorry, an error occurred while fetching song details!</p>;
  }

  // Если данные о песне доступны
  if (songDetails) {
    const { lyrics } = songDetails;
    const songName = lyrics.tracking_data.title;
    const artistName = lyrics.tracking_data.primary_artist;
    const lyricsText = lyrics.lyrics.body.html;

    return (
      <div className="details">
        <BasicMenu />
        <div className="songinfo">
          <SongInfo
            songName={songName}
            artistName={artistName}
            lyricsText={lyricsText}
          />
        </div>
      </div>
    );
  } else {
    // Если данные о песне не доступны
    return <p>Sorry, no lyrics found for this song!</p>;
  }
};
