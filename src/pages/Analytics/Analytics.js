import Card from "../../components/Card/Card";
import Charts from "../../components/Charts/Charts";
import { analyticsCardDetails } from "../../constants/CardDetails";
import "./analytics.css";
import { useEffect, useState } from 'react';
import { fetchData } from "./fetchData";


const Analytics = () => {
  const [userEngagementData, setUserEngagementData] = useState([]);

  useEffect(() => {
    
    fetchData(setUserEngagementData);
  }, []);
  


  return (
    <div className="analytics">
      <div className="heading">Analytics</div>
      <div className="container">
        <div className="section1">
          <div className="card-section">
           {analyticsCardDetails.map((card,index)=>
            <Card
              key={index}
              title={card.title}
              numbers={card.numbers}
              description={card.description}
            />
           )}
          </div>
          <div className="chart-section">
           <div className="charts-section1">
            <Charts data ={userEngagementData}
                    dataKey="pageViews"
                    month="month"/>
            
            <div className="charts-section1">
            <Charts data ={userEngagementData}
                        dataKey="timeSpent"
                        month="month"
              />
              </div>
              </div>
           <div className="charts-section2">
            <div className="left">
              <div className="left-top">
                <Charts data ={userEngagementData}
                        dataKey="users"
                        month="month"
                />
                </div>
              <div className="left-bottom">
                <Charts data ={userEngagementData}
                        dataKey="userSessions"
                        month="month"
                />
                </div>
            </div>
            <div className="right">
            <Charts data ={userEngagementData}
                    showAllLines={true}
                        month="month"
                        multiLineChartHeight={440}
                />
              </div>
           </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Analytics;
