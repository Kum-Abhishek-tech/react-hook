import axios from "axios";
import { useEffect, useReducer } from "react";

const initailState = {
  isLoading: true,
  posts: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCESS":
      return {
        isLoading: false,
        posts: action.payload,
        error: "",
      };
    case "Fetch_Error":
      return {
        isLoading: false,
        posts: {},
        error: "Something Went Wrong!",
      };
    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initailState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/9`)
      .then((res) => {
        dispatch({ type: "FETCH_SUCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "Fetch_Error" });
      });
  }, []);
  return (
    <>
      {state.isLoading ? "Loading" : state.posts.title}
      {state.error ? state.error : null}
    </>
  );
};
export default DataFetchingTwo;
