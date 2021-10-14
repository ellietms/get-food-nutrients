import React from "react";
import "bootstrap/dist/css/bootstrap.css";



function IngredientInfo ({chosenIngredient,back}) {
    return( 
          <div className="container"> 
          <button className="backButton" onClick={() => back()}>Back</button> 
          <div className="background">  
            <div><p className="title">Description:</p><p className="item">{chosenIngredient.description}</p></div>
            <div><p className="title">Food Nutrients:</p><p className="item">{chosenIngredient.foodNutrients.map(eachNutrient => 
                <div className="foodNutrients">
                    Nutrient: {eachNutrient.nutrientName} \ value : {eachNutrient.value}  
                </div>    
            )}
            </p>
           </div>   
          </div>  
          </div>
    )
}


export default IngredientInfo;