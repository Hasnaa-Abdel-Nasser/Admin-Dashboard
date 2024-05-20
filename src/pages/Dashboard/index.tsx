import Card, { IProps } from "../../components/ui/DashboardCards";
import { cardsData } from "../../utils";
import Table from '../../components/Table'
const DashboardPage = () => {

  return (
    <div className="w-full">
      <p className="text-lg font-medium">Dashboard</p>
      <div className="w-[90%] max-md:flex-wrap max-md:h-auto mx-auto my-7 h-28 flex justify-center items-center gap-5">
        {cardsData.map((card: IProps, index) => (
          <Card
            key={index}
            title={card.title}
            number={card.number}
            color={card.color}
            image={card.image}
          />
        ))}
      </div>
      <Table/>
    </div>
  );
};

export default DashboardPage;
