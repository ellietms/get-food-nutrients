import React, { useState, useEffect } from "react";
import TakeIngredients from "./components/TakeIngredients";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [data, setData] = useState();
  const [firstIngredient, setFirstIngredient] = useState();
  const [secondIngredient,setSecondIngredient] = useState();
  const params = {
    api_key : "UOH8WmlDML1ysY4YsLLc5QVwbT6ogaJZTV5Cj2ih",
    query : `${firstIngredient}`&`${secondIngredient}`,
  }
  useEffect(() => {
    fetch()
  }, [])

  return (
    <div className="pageContainer">
      <TakeIngredients 
      firstIngredient={firstIngredient}
      secondIngredient={secondIngredient}
      />
    </div>
  );
}

export default App;
