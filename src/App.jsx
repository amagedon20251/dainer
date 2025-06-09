import { useState } from "react";
import Footer from "./components/footer";
import Txcard from "./components/txcard";
import Header from "./components/header";
import Slider from "./components/slider";
import Faq from "./components/faq";
import Caution from "./components/caution";
import { useAccount } from "wagmi";

const App = () => {
  const { address, isConnected } = useAccount();

  return (
    <>
      <div className="excuseMe"></div>
      <Header />
      <Slider />
      <Caution />
      <div className="excusesMe"></div>
      <Txcard />
      <div className="excusesMe"></div>
      <Faq />
      <Footer />
    </>
  );
};

export default App;