import React , {useState} from "react";
import ShowInfoIngredient from "./ShowInfoIngredient";
import "bootstrap/dist/css/bootstrap.css";

function ShowIngredients({ data }) {
  let pageContents;
  const [showInfo,setShowInfo] = useState("currentPage");
  const [chosenIngredient,setChosenIngredient] = useState();
  function back(){
      setShowInfo("currentPage");
  }
  if(showInfo === "currentPage"){
      pageContents = (
        data.foods.map((eachFood) => {
            return (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{eachFood.description}</h5>
                  <p className="card-text">{eachFood.additionalDescriptions}</p>
                   <button type="button"  className="linkButton" onClick={() => {setShowInfo("showInfo");setChosenIngredient(eachFood)}}>Info</button>
                </div>
              </div>
            );
          })
      )
  }
  else if(showInfo === "showInfo"){
    pageContents = (
        <ShowInfoIngredient 
        chosenIngredient = {chosenIngredient}
        back = {() => back()}/>
    )
  }
  else{
      pageContents = (
          "Sorry We do not have any Ingredients"
      )
  } 
  return (
    <div>
      {pageContents}
    </div>
  );
}

export default ShowIngredients;
