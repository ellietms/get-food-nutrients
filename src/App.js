import React, { useState, useEffect } from "react";
import TakeIngredients from "./components/TakeIngredients";
import IngredientsCards from "./components/IngredientsCards";
import IngredientInfo from "./components/IngredientInfo";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let mainPage;
  const [data, setData] = useState();
  const [firstIngredient, setFirstIngredient] = useState();
  const [secondIngredient, setSecondIngredient] = useState();
  const [chosenIngredient,setChosenIngredient] = useState();
  const [showInfo,setShowInfo] = useState("currentPage");
  const params = {
    api_key: "UOH8WmlDML1ysY4YsLLc5QVwbT6ogaJZTV5Cj2ih",
    query: `${firstIngredient}&${secondIngredient}`,
    dataType: ["Survey (FNDDS)"],
    pagesize: 20,
  };
  console.log("Data", data);
  useEffect(() => {
    fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(
        params.api_key
      )}&query=${encodeURIComponent(
        params.query
      )}&dataType=${encodeURIComponent(
        params.dataType
      )}&pageSize=${encodeURIComponent(params.pagesize)}`
    )
       .then((response) => response.json())
       .then((newData) => setData(newData))
       .catch((error) => {throw new Error (error)});
    // eslint-disable-next-line
  }, [firstIngredient, secondIngredient]);
  const updateFirstIngredient = (event) => {
    setFirstIngredient(event.target.value);
  };
  const updateSecondIngredient = (event) => {
    setSecondIngredient(event.target.value);
  };
  function back(){
    setShowInfo("currentPage");
}
  if (data !== undefined && showInfo === "currentPage") {
    mainPage = (
      <div className="container">
        <TakeIngredients
          firstIngredient={firstIngredient}
          secondIngredient={secondIngredient}
          updateFirstIngredient={updateFirstIngredient}
          updateSecondIngredient={updateSecondIngredient}
        />
        <IngredientsCards 
        data={data}
        showInfo = {showInfo}
        setShowInfo = {setShowInfo}
        setChosenIngredient={setChosenIngredient}
        />
      </div>
    );
  }
  else if(showInfo === "showInfo"){
    mainPage = (
          <IngredientInfo 
          chosenIngredient = {chosenIngredient}
          back = {() => back()}/>
      )
  }
  
  else {
    mainPage = (
      <div className="container">
          <div className="col-12">
        <TakeIngredients
          firstIngredient={firstIngredient}
          secondIngredient={secondIngredient}
          updateFirstIngredient={updateFirstIngredient}
          updateSecondIngredient={updateSecondIngredient}
        />
      </div>
      </div>
    );
  }
  return <div>{mainPage}</div>;
}

export default App;
