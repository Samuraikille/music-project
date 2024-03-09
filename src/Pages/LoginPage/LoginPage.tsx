import { Header } from "../../components/Header/Header";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppHeading } from "../../components/UI/AppHeading/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import "./LoginPage.css"

export const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="login">
        <AppHeading  headingText={"Войти в Genius"} headingType={"h1"} />
        <form action="#">
          <AppInput inputType={"email"} inputPlaceholder={"Электроная почта"} />
          <AppInput inputType={"password"} inputPlaceholder={"Пароль"} />
          <AppButton buttonText={"Войти"} buttonType={"submit"} />
        </form>
        <a href="#">Забыли пароль?</a>
        <RegistrationInfo linkPath="/registration"/>
      </div>
    </>
  );
};
