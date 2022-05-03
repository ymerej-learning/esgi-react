import React, { useState } from "react";
import classes from "../../styles/Counter/counter.module.css";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    return (
        <div className={ classes.counter_container }>
            <div className={ classes.counter_input }>
                <label htmlFor="counter">Compteur</label>
                <input id="counter" type="number" value={count} onChange={event => setCount(Number(event.target.value) || 0)} disabled />
            </div>
            <div className={ classes.step_input }>
                <label htmlFor="step">Saut</label>
                <input id="step" type="number" value={step} onChange={event => setStep(Math.abs(Number(event.target.value) || 0))} />
            </div>
            
            <div className={ classes.counter_buttons }>
                <button onClick={() => setCount(count - step)}>🔽</button>
                <button onClick={() => setCount(count + step)}>🔼</button>
                <button onClick={() => setCount(0)}>🔄</button>
            </div>
        </div>
    )
  }
  
  export default Counter;
  