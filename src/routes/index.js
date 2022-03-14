import React from "react";
import { CardDetails, CardsList, CreateCard } from "../scenes";
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
        <Route path="/cards" exact element={<CardsList />} />
        <Route path="/cards/new" exact element={<CreateCard />} />
        <Route path="/cards/:card_number" exact element={<CardDetails />} />
        <Route path="*" element={<Navigate to="/cards" />} />
      </Routes>
    </Router>
  );
}

export default App;
