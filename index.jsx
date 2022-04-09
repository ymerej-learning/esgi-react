import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header";
import Footer from "./components/footer";

import classes from "./styles/index.module.css";

const Recipe = lazy(() => import("./components/recipe"));

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const App = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<div className={ classes.loading }>
                Loading...
            </div>}>
                <div className={ classes.container }>
                    <Recipe id="1" />
                    <Recipe id="2" />
                    <Recipe id="3" />
                    <Recipe id="4" />
                </div>
            </Suspense>
            <Footer />
        </>
    );
}

root.render(<App />);