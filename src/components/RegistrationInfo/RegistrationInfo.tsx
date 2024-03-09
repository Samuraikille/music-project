import { Link } from "react-router-dom";
import "./RegistrationInfo.css"

interface IRegistrationInfo {
    linkPath: string;
  }

export const RegistrationInfo = ({linkPath}: IRegistrationInfo) => {
    return (
        <div className="registration">
            <span>У вас нет аккаунта? <Link to={linkPath}>Зарегистрироваться</Link></span>
            <div className="icon">
                <a href="#" className="social">
                    <img src="./img/google.png" alt="google" />
                </a>
                <a href="#" className="social">
                    <img src="./img/facebook.png" alt="google" />
                </a>
                <a href="#" className="social">
                    <img src="./img/apple.png" alt="google" />
                </a>
            </div>
        </div>
        
    )
}