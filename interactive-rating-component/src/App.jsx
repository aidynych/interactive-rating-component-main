import { useContext } from "react";
import "./App.css";
import Choose from "./Choose";
import ThankYou from "./ThankYou";
import { AppContext } from "./Context";

function App() {
  const { rating, isRatingGiven } = useContext(AppContext);
  if (rating !== "null") {
    if (isRatingGiven) {
      return (
        <>
          <main>
            <ThankYou />
          </main>
        </>
      );
    } else {
      return (
        <>
          <main>
            <Choose />
          </main>
        </>
      );
    }
  }
}

export default App;
