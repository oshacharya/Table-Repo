import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../Redux/Reducers";
import { useState } from "react";
import "../CSS/style.css";

function Table() {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [data, setData] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  function toD(item) {
    setData(item.target.value);
    console.log(data);
    return(
    posts.map((a = { data }) => (
      <table className="tab">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Contact</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{a.id}</td>
            <td>{a.name}</td>
            <td>{a.email}</td>
            <td>{a.address.city}</td>
            <td>{a.phone}</td>
            <td>{a.company.name}</td>
          </tr>
        </tbody>
      </table>
    ))
    )
  }
  // const toD = (e) => {
  //   setData(e.target.value);
  // };

  return (
    <>
      <h1>User Details</h1>

      <div className="display">
        <pre>
          <select name="Details" onChange={toD} value={data}>
            {posts.map((item) => (
              <option key={item.id} value={item.id}>
                {item.id}
              </option>
            ))}
          </select>
        </pre>
      </div>
    </>
  );
}
export default Table;
