import React from "react";
import { useParams } from "react-router-dom";
import { Navbar, Details } from "../components";

const CreateCard = () => {
  const params = useParams();
  const { card_number = "" } = params;
  return (
    <React.Fragment>
      <Navbar title={card_number} />
      <Details />
    </React.Fragment>
  );
};

export default CreateCard;
