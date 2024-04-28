import axiosInstance from "../config/axios.config";

interface IProps{
    username:string;
    password: string;
    rememberMe?:boolean;
}
export const authLogin = async (config:IProps)=>{
    const {rememberMe , ...rest} = config;
    const {data , status} = await axiosInstance.post('auth/login' , rest);
    if(status === 200){
        if(rememberMe){
            localStorage.setItem("token" , data.token);
        }else{
            sessionStorage.setItem("token" , data.token);
        }
    }
    return {data , status};
}