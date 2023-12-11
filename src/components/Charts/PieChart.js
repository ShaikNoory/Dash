import { PieChart, Pie,Label, Cell } from "recharts";
import "./charts.css"



const PChart = ({data,dataKey}) => {
   
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      return (
        <div className="pieChart">
      <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey={dataKey}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label value={dataKey} position="center" />

      </Pie>
      
    </PieChart>
    </div>
      );
    }
  export default PChart;