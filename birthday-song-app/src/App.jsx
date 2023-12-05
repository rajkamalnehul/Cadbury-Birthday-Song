import Home from "./pages/home/home";
import Layout from "./components/layout";
import Navbar from "./components/navbar";

function App() {
  return (
    <Layout>
      <Navbar />
      <Home />
    </Layout>
  );
}

export default App;
