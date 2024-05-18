import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/ui/input";
import Eye from "../../components/ui/Eye";
import './index.css'
import { authSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../../components/ui/ErrorMessage";
import { authLogin } from "../../api/user";
interface IFormInput {
  username: string;
  password: string;
  rememberMe?: boolean;
}
const Login = () => {
  const[hidePassword , setHidePassword] = useState(true);
  const { register, handleSubmit, formState: { errors }} = useForm<IFormInput>(({resolver: yupResolver(authSchema)}));
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await authLogin(data);
    if(res && res.status === 200){
      location.replace("/")
    }
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="background-style"></div>
      <div className="fixed z-1 shadow-[0_0_8px_0] md:max-w-lg h-96 w-80 m-6 rounded-xl p-6 bg-transparent">
        <p className="text-2xl font-medium">Welcome Back!</p>
        <p className="text-xs text-gray-300">Login to continue</p>
        <form className="flex flex-col text-start mt-10" onSubmit={handleSubmit(onSubmit)}>
          <Input
            className="bg-transparent border-gray"
            placeholder="Username"
            defaultValue={"mor_2314"}
            {...register("username")}
          />
          {errors&& errors.username && <ErrorMessage message={errors.username.message}/>}
          <div className="w-full relative">
            <Input
              className="w-full mt-6 bg-transparent border-gray"
              placeholder="Password"
              defaultValue={"83r5^_"}
              type={hidePassword?'password':'text'}
              {...register("password")}
            />
            <Eye hide={hidePassword} setHide={setHidePassword}/>
          </div>
          {errors&& errors.password && <ErrorMessage message={errors.password.message}/>}
          <div className="text-xs flex gap-2 mb-8 ml-2 mt-3">
            <input type="checkbox" {...register("rememberMe")}  className="checked:bg-primary rounded-sm outline-none" id="box"/>
            <label htmlFor="box">Remember Me</label>
          </div>
          <button className="p-2 mb-2 font-semibold rounded-md bg-primary hover:bg-[#62bebb]" type="submit" >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
