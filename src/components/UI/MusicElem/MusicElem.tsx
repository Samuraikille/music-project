import "./MusicElem.css"
interface IMusicBlock {
  numberText: string;
  imgSource: string;
  altText: string;
  mainText: string;
  secondaryText?: string;
}

export const MusicElem = ({
  imgSource,
  altText,
  mainText,
  secondaryText,
  numberText
}: IMusicBlock) => {
  return (
    <div className="MusicElem">
        <p className="num">{numberText}</p>
      <img src={imgSource} alt={altText} />
      <div className="music__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text">{secondaryText}</p>
      </div>
    </div>
  );
};
