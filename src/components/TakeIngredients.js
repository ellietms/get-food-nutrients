import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function TakeIngredients({firstIngredient,secondIngredient}) {
  return(
    <div className="container">
      <div className="row">
        <div className="col-10">
          <label for="firstIngredient">First-Ingredient : </label><br/>
          <input type="text"  value={firstIngredient} id="firstIngredient"/><br/>
          <label for="secondIngredient">Second-Ingredient : </label><br/>
          <input type="text"  value={secondIngredient} id="secondIngredient"/>
        </div>
      </div>
    </div>
  )
}

export default TakeIngredients;