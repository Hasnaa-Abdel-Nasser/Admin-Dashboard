export interface IProps{
    image: string;
    color: string;
    number: number;
    title: string;
}

const Card = (props : IProps) => {
  return (
    <div className="bg-[rgb(42,45,62)] md:w-56 max-md:w-36 py-5 rounded-xl flex flex-col justify-center items-center">
      <div className={`w-9 p-2 ${props.color} bg-opacity-25 rounded-full`}>
        <img src={props.image} />
      </div>
      <p>{props.number}</p>
      <p className="text-xs text-gray-500">{props.title}</p>
    </div>
  );
};

export default Card;
