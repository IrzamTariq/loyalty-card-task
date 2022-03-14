import React, { useContext, useMemo, useReducer, useEffect } from "react";
import { api } from "../services/api";

const CardStateContext = React.createContext(undefined);
const CardDispatchContext = React.createContext(undefined);
function useCardState() {
  const card = useContext(CardStateContext);

  if (card === undefined) {
    throw new Error("useCardState can only be used inside CardProvider");
  }

  return card;
}

function useCardDispatch() {
  const card = useContext(CardDispatchContext);

  if (card === undefined) {
    throw new Error("useCardDispatch can only be used inside CardProvider");
  }

  return card;
}

function cardReducer(state, action) {
  switch (action.type) {
    case "SET_CARDS_LIST": {
      return { ...state, cards: action.payload };
    }
    case "SET_SELECTED_CARD": {
      return { ...state, selectedCard: action.payload };
    }

    default:
      throw new Error(`Invalid action ${action.type}`);
  }
}

function CardProvider({ children }) {
  const [card, dispatch] = useReducer(cardReducer, {
    cards: [],
    selectedCard: {},
  });

  useEffect(() => {
    api
      .getCards()
      .then((response) => {
        // console.log(response);
        dispatch({ type: "SET_CARDS_LIST", payload: response });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const memoedCard = useMemo(() => card, [card]);
  const memoedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <CardStateContext.Provider value={memoedCard}>
      <CardDispatchContext.Provider value={memoedDispatch}>
        {children}
      </CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
}

export { CardProvider, useCardDispatch, useCardState };
