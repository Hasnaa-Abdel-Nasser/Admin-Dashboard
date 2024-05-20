import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../config/axios.config';

interface IProps{
    queryKey:string[]
    url: string
}
const useGetData = ({queryKey , url}: IProps)=>{
    return useQuery({
        queryKey:queryKey,
        queryFn :async ()=>{
            const {data} = await axiosInstance.get(url);
            return data;
        } 
    });
}

export default useGetData;
