import React from "react";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__body">Home</div>
    </div>
  );
}

export default Home;
