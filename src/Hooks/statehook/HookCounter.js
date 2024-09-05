import { useState } from "react";

function HookCounter(){
    const [counter, setCounter] = useState(0);
    return(
        <div>
            <button onClick={() => setCounter(counter + 1)}>COUNT : {counter}</button>
        </div>
    )

}

export default HookCounter;