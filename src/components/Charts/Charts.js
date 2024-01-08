import './charts.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
const Charts = ({data,dataKey,month,showAllLines,multiLineChartHeight}) => {

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }
   
  return (
    <div className='charts'>
        <LineChart
      width={500}
      height={multiLineChartHeight?multiLineChartHeight:200}
      data={data}
     
    >
        <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={month} />
      <YAxis />
      <Tooltip />
      <Legend />
    
      {showAllLines ? (
          Object.keys(data[0]).map((key, index) => (
            key !== month && <Line key={index} type="monotone" dataKey={key} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
          ))
        ) : (
          <Line type="monotone" dataKey={dataKey} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
        )}
        
      </LineChart>
        </div>
  )
  
}

export default Charts