import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "../Redux/API";
import { getUser } from "../Redux/API";
import "../CSS/style.css";

function Table() {
  
  const { posts, loading } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.user);
  const [data, setData] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const toD = (e) => {
    setData(e.target.value);
    dispatch(getUser(e.target.value));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <>
      <h1>User Details</h1>

      <div className="display">
        <pre>
          <select name="Details" onChange={toD} value={data}>
            <option value="0">Select ID</option>
            {posts.map((item) => (
              <option key={item.id} value={item.id}>
                {item.id}
              </option>
            ))}
          </select>
        </pre>
      </div>

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
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address?.city}</td>
            <td>{user.phone}</td>
            <td>{user.company?.name}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
