import { useMemo, useState } from "react";

const MemoCounter = () =>{
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () =>{
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(() => {
        // let i =0;
        // while(i<200000000) i++
        return counterOne % 2 === 0
    },[counterOne])
    console.log("🚀 ~ isEven ~ isEven:", isEven)

    return(
        <div>
            <div>
                <button onClick={incrementOne}>COUNT ONE : {counterOne}</button>
                <span>{isEven ? 'EVEN' : "ODD"}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count TWO : {counterTwo}</button>
            </div>
        </div>
    )

}
export default MemoCounter;