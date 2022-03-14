import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Details from "../components/Details";

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
