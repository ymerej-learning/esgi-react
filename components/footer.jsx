import React from "react";
import classes from "../styles/footer.module.css";

const Footer = () => {

    return (
        <>
            <footer className={ classes.footer_recipes }>
                <div className={ classes.footer_title }>Recettes</div>
                <div className={ classes.footer_content }>Un site aux 1000 et 1 recettes</div>
                <div className={ classes.footer_social }>
                    <div className={ classes.social_instagram }>Instagram</div>
                    <div className={ classes.social_facebook }>Facebook</div>
                </div>
            </footer>
        </>
    );
}

export default Footer;