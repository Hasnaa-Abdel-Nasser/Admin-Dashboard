import Card, { IProps } from "../../components/ui/DashboardCards";
import { cardsData } from "../../utils/dashboard.cards";
import BasicTable from '../../components/Table'
const DashboardPage = () => {
  return (
    <div className="page">
      <p className="text-lg font-medium">Dashboard</p>
      <div className="w-[90%] mx-auto my-7 h-28 flex justify-between items-center gap-5">
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
      <BasicTable/>
    </div>
  );
};

export default DashboardPage;
