import "./Search.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetLyricsBySearchQuery } from "../../store/api/searchApi";
import { Loader } from "../UI/Loader/Loader";
import { Error } from "../UI/Error/Error";
import BasicMenu from "../Menu/Menu";
import { MixElem } from "../UI/MixElem/MixElem";

export const Search = () => {
  const [searchQueryTemp, setSearchQueryTemp] = useState(""); // Временное состояние для хранения значения ввода
  const [searchQuery, setSearchQuery] = useState(""); // Состояние для хранения значения ввода, используемое для запроса к API
  const { data, isFetching, error } = useGetLyricsBySearchQuery(searchQuery); // Передача значения ввода в хук

  const handleSearchIconClick = () => {
    setSearchQuery(searchQueryTemp);
  };

  if (isFetching) {
    return <Loader title="Loading songs..." />;
  }

  if (error) {
    return <Error />;
  }

  const lyrics = data?.hits;

  return (
    <div className="Search">
      <div className="nav">
        <form>
          <input
            type="text"
            placeholder="Search"
            value={searchQueryTemp}
            onChange={(e) => setSearchQueryTemp(e.target.value)}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                handleSearchIconClick();
              }
            }}
          />
          <img
            src="./img/search.png"
            alt="searchIcon"
            onClick={handleSearchIconClick}
          />
        </form>
        <BasicMenu />
      </div>
      <div className="result">
        {lyrics &&
          lyrics.map((elem, index) => (
            <Link to={`/details/${elem.result.id}`} key={index}>
              <MixElem
                imgSource={elem.result.header_image_url}
                altText={elem.result.full_title}
                mainText={elem.result.title}
                secondaryText={elem.result.artist_names}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};
