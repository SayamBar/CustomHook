import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Fetch(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async(url) => {
    try {
        const res = await axios.get(url)
        setData(res.data)
    } catch(error) {
        setError(error.message)
    }  
  }

  useEffect(() => {
    setLoading(true);
    getData(props);
    setLoading(false);
  },[])

  return {data, error, loading};
}

export default Fetch;