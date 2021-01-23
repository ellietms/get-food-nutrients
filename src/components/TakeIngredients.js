import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function TakeIngredients({
  firstIngredient,
  secondIngredient,
  updateFirstIngredient,
  updateSecondIngredient,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <label for="firstIngredient">First-Ingredient : </label>
          <br />
          <input
            type="text"
            onChange={(event) => {updateFirstIngredient(event);console.log(event.target.value)}}
            value={firstIngredient}
            id="firstIngredient"
          />
          <br />
          <label for="secondIngredient">Second-Ingredient : </label>
          <br />
          <input
            type="text"
            onChange={(event) => {updateSecondIngredient(event);console.log(event.target.value)}}
            value={secondIngredient}
            id="secondIngredient"
          />
        </div>
      </div>
    </div>
  );
}

export default TakeIngredients;
