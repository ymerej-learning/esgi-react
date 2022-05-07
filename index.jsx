import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

// import Header from "./components/Basic/header";
// import Footer from "./components/Basic/footer";
// import classes from "./styles/index.module.css";
// import Counter from "./components/Counter/counter";
// import JSONPlaceholder from "./components/Fetch/jsonplaceholder";
// import Login from "./components/Form/login";
// const Recipe = lazy(() => import("./components/Basic/recipe"));

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const App = () => {
    return (
        <>
            {/* <Header />
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
            <Footer /> */}
        </>
    );
}

root.render(<App />);