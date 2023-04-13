import React from "react";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Sidebar />
        <div className="home__body"></div>
      </div>
    </div>
  );
}

export default Home;
