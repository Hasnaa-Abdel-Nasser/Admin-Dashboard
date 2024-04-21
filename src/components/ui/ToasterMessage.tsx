import {toast } from 'react-hot-toast';

interface IProps{
  message: string;
  background?: string;
}
export const ToasterMessage = ({message , background='#333'}:IProps) => {
  const notify = () => toast(message, {icon: '👏',style: {
    background,
    color: '#fff',
    fontSize:'14px'
  }});
  return notify();
}
