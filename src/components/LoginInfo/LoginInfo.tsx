import { Link } from "react-router-dom";
import "./LoginInfo.css"

interface ILoginInfo {
    linkPath: string;
  }

export const LoginInfo = ({linkPath}: ILoginInfo) => {
    return (
        <div className="Login">
            <span>Уже есть аккаунт? <Link to={linkPath}>Войдите в него</Link></span>
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