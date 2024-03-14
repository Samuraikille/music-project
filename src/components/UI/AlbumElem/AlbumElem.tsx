import "./AlbumElem.css"
interface IAlbumBlock {
  imgSource: string;
  altText: string;
  mainText: string;
  secondaryText: string;
}

export const AlbumElem = ({
  imgSource,
  altText,
  mainText,
  secondaryText,
}: IAlbumBlock) => {
  return (
    <div className="Elem">
      <img src={imgSource} alt={altText} />
      <div className="music__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text">{secondaryText}</p>
      </div>
    </div>
  );
};
