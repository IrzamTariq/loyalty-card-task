import React from "react";
import Create from "../components/Create";
import Navbar from "../components/Navbar";

const CreateCard = () => {
  return (
    <React.Fragment>
      <Navbar title="Create New Card" />
      <Create />
    </React.Fragment>
  );
};

export default CreateCard;
