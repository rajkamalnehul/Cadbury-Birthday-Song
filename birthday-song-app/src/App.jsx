import React, { useEffect, useState } from "react";
import HomePage from "./pages/home";
import Layout from "./components/layout";
import LandingPage from "./pages/landing";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 2000);
  }, []);

  return (
    <Layout navbar={showIntro ? false : true}>
      {showIntro ? <LandingPage /> : <HomePage />}
    </Layout>
  );
}

export default App;
