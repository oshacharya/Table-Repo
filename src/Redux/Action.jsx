import axios from "axios";
import { useState } from "react";

function Action() {
    const [data, setData] = useState([])
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setData(response.data)
    }).catch((err) => console.log(err));
    console.log(data)
  return data
}

export default Action