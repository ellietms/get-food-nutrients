import React from "react";
import "bootstrap/dist/css/bootstrap.css";



function IngredientInfo ({chosenIngredient,back}) {
    return(
        <div className="container">
          <div className="row">
            <p>{chosenIngredient}</p>
            <p>{chosenIngredient}</p> 
            <p>{chosenIngredient}</p> 
            <p>{chosenIngredient}</p>   
            <button onClick={() => back()}>Back</button>
          </div>  
        </div>
    )
}


export default IngredientInfo;