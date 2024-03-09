import "./AppButton.css"
interface IAppButton {
    buttonText: string;
    onClick ?: () => void;
    buttonType: "submit" | "reset" | "button" | undefined;
  }
  
  export const AppButton = ({ buttonText, onClick, buttonType }: IAppButton) => {
    return <button type={buttonType} onClick={onClick}>{buttonText}</button>;
  };