import React from "react";
import { Navbar, Create } from "../components";

const CreateCard = () => {
  return (
    <React.Fragment>
      <Navbar title="Create New Card" />
      <Create />
    </React.Fragment>
  );
};

export default CreateCard;
