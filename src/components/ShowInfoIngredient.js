import React from "react";
import "bootstrap/dist/css/bootstrap.css";



function ShowInfoIngredient ({chosenIngredient,back}) {
    return(
        <div>
            <button onClick={() => back()}>Back</button>
        </div>
    )
}


export default ShowInfoIngredient;