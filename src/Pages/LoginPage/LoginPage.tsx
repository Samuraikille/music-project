import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../../components/Header/Header";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppHeading } from "../../components/UI/AppHeading/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import "./LoginPage.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/slices/userSlice";
import { useEffect } from "react";

interface ISubmitProps {
  useremail: string;
  userpassword: string;
}

const mockUser = {
  mail: "nurik@gmail.com",
  user_id: 1235,
  name: "Samurai",
  reg_data: new Date().toISOString(),
};

const loginFormSchema = yup.object({
  useremail: yup
    .string()
    .email("Введите настоящую почту")
    .required("Обязательное поле для ввода!"),
  userpassword: yup
    .string()
    .min(6, "Пароль должен содержать как минимум 6 символа!")
    .required("Обязательное поле для ввода!"),
});
export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userSlice.user);
  const onLoginSubmit: SubmitHandler<ISubmitProps> = () => {
    dispatch(changeUser(mockUser))
  };
  useEffect(() => {
    if (user?.user_id){
      navigate("/main")
    }
    
  }, [user])
  return (
    <>
      <Header />
      <div className="login">
        <AppHeading headingText={"Войти в Genius"} headingType={"h1"} />
        <form action="#" onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <AppInput
                inputType={"text"}
                inputPlaceholder={"Электроная почта"}
                errorMessage={errors.useremail?.message}
                isError={errors.useremail ? true : false}
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <AppInput
                inputType={"password"}
                inputPlaceholder={"Пароль"}
                errorMessage={errors.userpassword?.message}
                isError={errors.userpassword ? true : false}
                {...field}
              />
            )}
          />

          <AppButton buttonText={"Войти"} buttonType={"submit"} />
        </form>
        <a href="#">Забыли пароль?</a>
        <RegistrationInfo linkPath="/registration" />
      </div>
    </>
  );
};
