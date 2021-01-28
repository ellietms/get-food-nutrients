import React, { useState, useEffect } from "react";
import TakeIngredients from "./components/TakeIngredients";
import ShowIngredients from "./components/ShowIngredients";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let mainPage;
  const [data, setData] = useState();
  const [firstIngredient, setFirstIngredient] = useState();
  const [secondIngredient, setSecondIngredient] = useState();
  const params = {
    api_key: "UOH8WmlDML1ysY4YsLLc5QVwbT6ogaJZTV5Cj2ih",
    query: `${firstIngredient}&${secondIngredient}`,
    dataType: ["Survey (FNDDS)"],
    pagesize : 15
  };
  console.log("Data",data);
  useEffect(() => {
    fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(
        params.api_key
      )}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`
    )
      .then(response => response.json())
      .then(newData => setData(newData))
      .catch((error) => console.log("THIS IS THE ERROR",error))
    // eslint-disable-next-line
  }, [firstIngredient, secondIngredient]);
  const updateFirstIngredient = (event) => {
    setFirstIngredient(event.target.value);
  };
  const updateSecondIngredient = (event) => {
    setSecondIngredient(event.target.value);
  };
  if(data !== undefined){
    mainPage = (
      <div className="pageContainer">
      <TakeIngredients
        firstIngredient={firstIngredient}
        secondIngredient={secondIngredient}
        updateFirstIngredient={updateFirstIngredient}
        updateSecondIngredient={updateSecondIngredient}
      />
      <ShowIngredients data={data}/>
    </div>
    )
  }
  else {
    mainPage = (
    <div className="pageContainer">
    <TakeIngredients
      firstIngredient={firstIngredient}
      secondIngredient={secondIngredient}
      updateFirstIngredient={updateFirstIngredient}
      updateSecondIngredient={updateSecondIngredient}
    />
    </div>
    )
  }
  return (
    <div>
    {mainPage}
    </div>
  );
}

export default App;
