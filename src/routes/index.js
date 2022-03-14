import React from "react";
import Home from "../scenes/Home";
import CreateCard from "../scenes/CreateCard";
import CardDetails from "../scenes/CardDetails";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cards" exact element={<Home />} />
        <Route path="/cards/new" exact element={<CreateCard />} />
        <Route path="/cards/:card_number" exact element={<CardDetails />} />
        <Route path="*" element={<Navigate to="/cards" />} />
      </Routes>
    </Router>
  );
}

export default App;
