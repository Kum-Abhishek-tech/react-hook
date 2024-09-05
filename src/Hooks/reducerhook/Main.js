import { createContext, useReducer } from "react";
// import CounterOne from "./CounterOne";
// import CounterTwo from "./CounterTwo";
// import CounterThree from "./CounterThree";
// import DataFetchingOne from "./DataFetchingOne";
// import DataFetchingTwo from "./DataFetchingTwo";
// import ComponentA from "./ComponentA";
// import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const initailState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initailState;
    default:
      return state;
  }
};

export const CountContext = createContext();
const Main = () => {
  const [count, dispatch] = useReducer(reducer, initailState);
  return(
    <CountContext.Provider value={{countState: count, countDispatch:dispatch}}>
        <div>
            {count}
            {/* <CounterOne /> */}
            {/* <CounterTwo /> */}
            {/* <CounterThree /> */}
            {/* <DataFetchingOne /> */}
            {/* <DataFetchingTwo /> */}
            {/* <ComponentA /> */}
            {/* <ComponentB /> */}
            <ComponentC />
        </div>
     </CountContext.Provider>
  )
};
export default Main;
