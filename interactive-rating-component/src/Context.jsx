import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [rating, setRating] = useState(null);
  const [isRatingGiven, setIsRatingGiven] = useState(false);
  return (
    <AppContext.Provider
      value={{ setRating, rating, setIsRatingGiven, isRatingGiven }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
