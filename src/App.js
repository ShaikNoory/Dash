import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Analytics from "./pages/Analytics/Analytics";
import { Routes,Route} from 'react-router-dom'
import Financials from "./pages/Financials/Financials";
import Monitor from "./pages/Monitor/Monitor"
import Projects from "./pages/Projects/Projects"
import Reports from "./pages/Reports/Reports"
import Stock from "./pages/Stock/Stock"
import Systems from "./pages/Systems/Systems";
import { financialData, userEngagementData } from "./constants/CardDetails";
import { StoreAnalyticsData } from "./pages/Analytics/StoreAnalyticsData";
import { StoreFinancialData } from "./pages/Financials/StoreFinancialData";
function App() {
   StoreAnalyticsData(userEngagementData)
   StoreFinancialData(financialData)
  return (
    <div>
      <Header/>
      <div className="layout">
      <div className="sidebar">
      <Sidebar/>
      </div>
      <div className="pages">
      <Routes>
      <Route path="/" element={ <Analytics/> } />
      <Route path="/financials" element={ <Financials/> } />
      <Route path="/monitor" element={ <Monitor/> } />
      <Route path="/projects" element={ <Projects/> } />
      <Route path="/reports" element={ <Reports/> } />
      <Route path="/stock" element={ <Stock/> } />
      <Route path="/system" element={ <Systems/> } />
      </Routes>
      </div>
      </div>
     </div>
  );
}

export default App;
