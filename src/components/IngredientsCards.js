import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function IngredientsCards({ data , showInfo , setShowInfo , setChosenIngredient}) {
  let pageContents;
  if(showInfo === "currentPage"){
      pageContents = (
        data.foods.map((eachFood) => {
            return (
              <div className="container"> 
              <div className="cardContainer">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{eachFood.description}</h5>
                   <button type="button"  className="linkButton" onClick={() => {setShowInfo("showInfo");setChosenIngredient(eachFood)}}>Food Nutrients</button>
                </div>
              </div>
              </div>
              </div>
            );
          })
      )
  }
  else{
      pageContents = (
          "Sorry We do not have any food like this :)"
      )
  } 
  return (
    <div>
      {pageContents}
    </div>
  );
}

export default IngredientsCards;
