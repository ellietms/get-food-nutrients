import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function TakeIngredients({
  firstIngredient,
  secondIngredient,
  updateFirstIngredient,
  updateSecondIngredient,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ingredientContainer">
          <label for="firstIngredient" className="takeIngredient">
            First-Ingredient:
          </label>
          <input
            type="text"
            onChange={(event) => {
              updateFirstIngredient(event);
            }}
            value={firstIngredient}
            id="firstIngredient"
            className="inputIngredient"
          />
          <br />
          <label for="secondIngredient" className="takeIngredient">
            Second-Ingredient :{" "}
          </label>
          <input
            type="text"
            onChange={(event) => {
              updateSecondIngredient(event);
            }}
            value={secondIngredient}
            id="secondIngredient"
            className="inputIngredient"
          />
        </div>
      </div>
    </div>
  );
}

export default TakeIngredients;
