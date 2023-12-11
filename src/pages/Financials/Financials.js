import Card from "../../components/Card/Card";
import PChart from "../../components/Charts/PieChart";
import { financialsCardDetails } from "../../constants/CardDetails";
import "./financials.css";
import { useState, useEffect } from "react";
import { fetchData } from "./fetchData";
import Table from "../../components/Table/Table";

const Financials = () => {
  const [financialData, setFinancialData] = useState([]);
  
  useEffect(() => {
    fetchData(setFinancialData);
  }, []);

  return (
    <div className="financials">
      <div className="heading">Financials</div>
      <div className="container">
        <div className="card-section">
          {financialsCardDetails.map((card, index) => (
            <Card key={index} title={card.title} numbers={card.numbers} />
          ))}
        </div>
        <div className="financialCharts">
          <div className="chart">
            <PChart
              data={financialData}
              dataKey="marketCap"
              cx={100}
              cy={100}
            />
          </div>
          <div className="table">
            <Table financialData={financialData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;
