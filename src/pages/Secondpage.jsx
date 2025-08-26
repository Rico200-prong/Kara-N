import React from "react";
import Navbar from "./../components/secondPageComponents/Navbar";
import Secondhero from "./../components/secondPageComponents/Secondhero";
import Companies from "./../components/secondPageComponents/Companies";
import Jobs from "./../components/secondPageComponents/Jobs";
import Steps from "./../components/secondPageComponents/Steps";
import Featured from "./../components/secondPageComponents/Featured";
import News from "./../components/secondPageComponents/News";
import Updates from "./../components/secondPageComponents/Updates";

const Secondpage = () => {
  return (
    <main>
      <Navbar />
      <Secondhero />
      <Companies />
      <Jobs />
      <Steps />
      <Featured />
      <News />
      <Updates />
    </main>
  );
};

export default Secondpage;
