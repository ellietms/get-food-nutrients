import React from "react";
import "bootstrap/dist/css/bootstrap.css";



function IngredientInfo ({chosenIngredient,back}) {
    return( 
          <div className="container"> 
          <button className="backButton" onClick={() => back()}>Back</button> 
          <div className="background">  
            <div><p className="title">Description:</p><p className="item">{chosenIngredient.description}</p></div>
            <div><p className="title">Additional descriptions:</p><p className="item">{chosenIngredient.additionalDescriptions}</p></div><br/>
            <div><p className="title">Score:</p><p className="item">{Math.floor((chosenIngredient.score) / 5)}%</p></div><br/>
            <div><p className="title">FoodNutrients:</p><p className="item">{chosenIngredient.foodNutrients.map(eachNutrient => 
                <div className="foodNutrients">
                    Nutrient: {eachNutrient.nutrientName} -- value : {eachNutrient.value}  
                </div>    
            )}
            </p>
           </div>   
          </div>  
          </div>
    )
}


export default IngredientInfo;