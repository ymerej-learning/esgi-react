import React from "react";
import classes from "../styles/recipe.module.css";

const Recipe = (number) => {

    const title = "Recette " + number.id;
    const content = "Lorem Ipsum, dolor sit amet, ...";

    const share = [
        <button className={ classes.button_share } type="button">Partager</button>
    ]
    const read = [
        <button className={ classes.button_read } type="button">Lire</button>
    ]

    return (
        <div className={ classes.recipe }>
            <div className={ classes.recipe_container }>
                <div className={ classes.recipe_title }>{ title }</div>
                <div className={ classes.recipe_content }>{ content }</div>
                <div className={ classes.recipe_buttons }>
                    { share }
                    { read }
                </div>
            </div>
        </div>
    );
}

export default Recipe;