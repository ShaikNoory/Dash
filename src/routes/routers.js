import Analytics from "../pages/Analytics/Analytics";
import Financials from "../pages/Financials/Financials";
import Monitor from "../pages/Monitor/Monitor";
import Projects from "../pages/Projects/Projects";
import Reports from "../pages/Reports/Reports";
import Stock from "../pages/Stock/Stock";
import Systems from "../pages/Systems/Systems";

export const routers = [
    { path: "/", element: <Analytics /> },
    { path: "/financials", element: <Financials /> },
    { path: "/monitor", element: <Monitor /> },
    { path: "/projects", element: <Projects /> },
    { path: "/reports", element: <Reports /> },
    { path: "/stock", element: <Stock /> },
    { path: "/system", element: <Systems /> },
  ];