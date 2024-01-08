import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routers } from "./routes/routers"
import { useEffect } from "react";
import { financialData, userEngagementData } from "./constants/CardDetails";
import { StoreAnalyticsData } from "./pages/Analytics/StoreAnalyticsData";
import { StoreFinancialData } from "./pages/Financials/StoreFinancialData";
function App() {

  
  useEffect(() => {  
    const storeData = async () => {
    try {
      await StoreAnalyticsData(userEngagementData);
      await StoreFinancialData(financialData);
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

    storeData();
  }, []);
  return (
    <div>
      <Header />
      <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="pages">
          <Routes>
          {routers.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
