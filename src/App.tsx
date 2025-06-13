import { useLocation } from "react-router-dom";
import Router from "./routes/router";
import Layout from "./templates/layout";
import { useEffect } from "react";
import { initGA, logPageView } from "./lib/analitcs";


export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Inicializa o GA apenas em produção
    if (process.env.NODE_ENV === 'production') {
      initGA(import.meta.env.VITE_GA_MEASUREMENT_ID);
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      logPageView(location.pathname);
    }
  }, [location.pathname]);
  return (
    <Layout>
      <Router />
    </Layout>
  )
}