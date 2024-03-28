import "./MixElem.css"
interface IMixBlock {
  imgSource: string | undefined;
  altText: string | undefined;
  mainText: string | undefined;
  secondaryText?: string | undefined;
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
