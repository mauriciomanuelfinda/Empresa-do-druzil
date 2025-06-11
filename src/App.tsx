import Router from "./routes/router";
import Layout from "./templates/layout";


export default function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  )
}