import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const Rate = ({rate}:{rate:number}) => {
  const fullStars = Math.floor(rate);
  const halfStar = rate - fullStars !== 0;
  const grayStars = 5-(fullStars + +halfStar);
  const rateStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    if(grayStars){
        for (let i = 0; i < grayStars; i++) {
            stars.push(<FaStar key={i+fullStars} className="text-gray-500" />);
        }
    }
    return stars;
  };

  return (
    <div className="flex">
        {rateStars()}
        <p className="text-xs text-gray-500">({rate})</p>
    </div>
  )
}

export default Rate