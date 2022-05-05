import React from "react";
import classes from "../../styles/Basic/header.module.css";

const Header = () => {

    return (
        <>
            <nav className={ classes.navbar_recipes }>
                <div className={ classes.left }>Recettes</div>
                <div className={ classes.right }>À propos de Newsletter</div>
            </nav>
        </>
    );
}

export default Header;