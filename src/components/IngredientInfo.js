import React from "react";
import "bootstrap/dist/css/bootstrap.css";



function IngredientInfo ({chosenIngredient,back}) {
    return(
        <div>
            <button onClick={() => back()}>Back</button>
        </div>
    )
}


export default IngredientInfo;