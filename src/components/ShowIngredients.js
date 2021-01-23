import React from "react";
import "bootstrap/dist/css/bootstrap.css";


function ShowIngredients({data}){
    let foods
    if(data.foods !== undefined){
        foods = (
            data.foods.map(eachfood => {
                return(
                <div className="card">
                <div class="card-body">
                <h5 class="card-title">{eachfood.description}</h5>
                <p class="card-text">{eachfood.additionalDescriptions}</p>
                </div>
                </div>
                )
               })
        )
    }
    return (
    <div>
        {foods}   
    </div>
     )
}


export default ShowIngredients;