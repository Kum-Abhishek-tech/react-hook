import { useReducer } from "react"

const initailState = {
    firstCounter : 0,
    secondCounter : 10,
}

const reducer = (state, action) => {
    switch(action.type){
        case 'increment' :
            return {...state, firstCounter : state.firstCounter + action.value}
        case 'decrement' : 
            return {...state, firstCounter : state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter : state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter : state.secondCounter - action.value}
        case 'reset' :
            return initailState
        default:
            return state            
    }
}

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initailState)
    return(
        <>
        <div>FIRST COUNT: {count.firstCounter}</div>
        <button onClick={() => dispatch({type:'increment', value:1})}>INCREMENT</button>
        <button onClick={() => dispatch({type:'decrement', value:1})}>DECREMENT</button>
        <button onClick={() => dispatch({type:'increment', value:5})}>INCREMENT 5+</button>
        <button onClick={() => dispatch({type:'decrement', value:5})}>DECREMENT 5-</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        <br/>
        <br/>
        <div>
            <div>SECOND COUNTER : {count.secondCounter}</div>
            <button onClick={() => dispatch({type : 'increment2', value:2})}>Increment @@@</button>
            <button onClick={() => dispatch({type : 'decrement2', value:2})}>DECREMENT @@@</button>
        </div>
        </>
    )


}
export default CounterTwo;