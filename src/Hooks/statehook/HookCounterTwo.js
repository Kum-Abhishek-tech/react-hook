import { useState } from "react";

const HookCounterTwo = () => {
    const initailCount = 0;
    const [count, setCount] = useState(initailCount);
    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount((prev) => prev+1)
        }
    }
    const decrementFive = () => {
        for(let i =0; i<5; i++){
            setCount((prev) => prev - 1)
        }
    }
    return(
        <div>
            COUNT : {count}
            <button onClick={() => setCount(initailCount)}>Reset</button><br/>
            <button onClick={() => setCount((prev) => prev+1)}>Increment</button><br/>
            <button onClick={() => setCount((prev) => prev -1)}>Decrement</button><br/>
            <button onClick={incrementFive}>Increment Five</button><br/>
            <button onClick={decrementFive}>Decrement Five</button><br/>
        </div>
    )
}
export default HookCounterTwo;