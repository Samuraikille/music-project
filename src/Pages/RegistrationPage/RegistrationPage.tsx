import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../../components/Header/Header";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppHeading } from "../../components/UI/AppHeading/AppHeading";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import "./RegistrationPage.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { LoginInfo } from "../../components/LoginInfo/LoginInfo";

interface ISubmitProps {
  username: string;
  useremail: string;
  userpassword: string;
  userphone: string;
}
const registrationFormSchema = yup.object({
  username: yup.string().required("Введите имя"),
  useremail: yup
    .string()
    .email("Введите настоящую почту")
    .required("Обязательное поле для ввода!"),
  userphone: yup.string().required("Введите номер телефона"),
  userpassword: yup
    .string()
    .min(6, "Пароль должен содержать как минимум 6 символа!")
    .required("Обязательное поле для ввода!"),
});
export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
      username: "",
      userphone: "",
    },
  });

  const navigate = useNavigate();
  const onRegistrationSubmit: SubmitHandler<ISubmitProps> = (data) => {
    console.log(data);
    if (data) {
      navigate("");
    }
  };
  return (
    <>
      <Header />
      <div className="registration">
        <AppHeading
          headingText={"Зарегистрируйтесь в Genius"}
          headingType={"h1"}
        />
        <form action="#" onSubmit={handleSubmit(onRegistrationSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Введите имя"
              inputType="text"
              isError={errors.username ? true : false}
              errorMessage={errors.username?.message}
              {...field}
            />
          )}
        />
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
          name="userphone"
          control={control}
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Введите номер телефона"
              inputType="text"
              isError={errors.userphone ? true : false}
              errorMessage={errors.userphone?.message}
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

          <AppButton buttonText={"Зарегистрироваться"} buttonType={"submit"} />
        </form>
        <a href="#">Забыли пароль?</a>
        <LoginInfo linkPath="/" />
      </div>
    </>
  );
};
