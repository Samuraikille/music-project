import "./MixElem.css"
interface IMixBlock {
  imgSource: string;
  altText: string;
  mainText: string;
  secondaryText: string;
}

export const MixElem = ({
  imgSource,
  altText,
  mainText,
  secondaryText,
}: IMixBlock) => {
  return (
    <div className="MixElem">
      <img src={imgSource} alt={altText} />
      <div className="music__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text">{secondaryText}</p>
      </div>
    </div>
  );
};
