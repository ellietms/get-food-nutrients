import React from "react";
import "bootstrap/dist/css/bootstrap.css";



function IngredientInfo ({chosenIngredient,back}) {
    return(
        <div className="container">
         <button onClick={() => back()}>Back</button>
          <div className="row">
            <p>Description : {chosenIngredient.description}</p><br/>
            <p>additionalDescriptions: {chosenIngredient.additionalDescriptions}</p><br/>
            <p>Score: {Math.floor((chosenIngredient.score) / 5)}%</p><br/>
            <p>foodNutrients: {chosenIngredient.foodNutrients.map(eachNutrient => 
                <div>
                    <p>nutrientName : {eachNutrient.nutrientName}</p>
                    <p>value : {eachNutrient.value}</p>    
                </div>    
            )}
           </p>   
          </div>  
        </div>
    )
}


export default IngredientInfo;