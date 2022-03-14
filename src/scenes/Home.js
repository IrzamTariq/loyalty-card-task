import React from "react";
import List from "../components/List";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar title="Loyalty Cards" />
      <List />
    </React.Fragment>
  );
};

export default Home;
