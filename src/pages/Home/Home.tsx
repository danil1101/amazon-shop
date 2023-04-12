import React from "react";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import "./Home.scss";
import Select from "../../components/common/Select/Select";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Sidebar />
        <div className="home__body">
          <Select />
        </div>
      </div>
    </div>
  );
}

export default Home;
