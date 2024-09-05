import axios from "axios";
import { useEffect, useState } from "react";

const DataFetching = () => {
  const [posts, setPosts] = useState();
  const [id,setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        console.log(res);
        setPosts(res.data);
    })
    .catch(err => {
        console.log(err)
    })
  },[idFromBtnClick])
  const handleClick =()=>{
    setIdFromBtnClick(id);
  }
//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts`)
//       .then((res) => {
//         console.log(res);
//         setPosts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button onClick={handleClick}>Fetch posts</button>
        <div>{posts?.title}</div>
      {/* {posts.map((ele) => (
        <li key={ele.id}>{ele.title}</li>
      ))} */}
    </div>
  );
};
export default DataFetching;
