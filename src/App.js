import React,{ useState, useEffect } from "react";
import TakeIngredients from "./components/TakeIngredients";
import ShowIngredients from "./components/ShowIngredients";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [data, setData] = useState();
  const [firstIngredient, setFirstIngredient] = useState();
  const [secondIngredient,setSecondIngredient] = useState();
  const params = {
    api_key : "UOH8WmlDML1ysY4YsLLc5QVwbT6ogaJZTV5Cj2ih",
    query : `${firstIngredient}&${secondIngredient}`,
    dataType: ["Survey (FNDDS)"],
    // pagesize: 20
  }
  let url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${params.query}&dataType=${encodeURIComponent(params.dataType)}`
  useEffect(() => {
    fetch(url)
    .then(response => setData(response.json()))
    .then(console.log("NEW DATA",data));
  },[firstIngredient,secondIngredient])
  const updateFirstIngredient = (event) => {
    setFirstIngredient(event.target.value);
  }
  const updateSecondIngredient = (event) => {
    setSecondIngredient(event.target.value)
  }
 
  return (
    <div className="pageContainer">
      <TakeIngredients 
      firstIngredient={firstIngredient}
      secondIngredient={secondIngredient}
      updateFirstIngredient={updateFirstIngredient}
      updateSecondIngredient={updateSecondIngredient}
      />
      {data && <ShowIngredients data={data}/>}
    </div>
  );
}

export default App;
