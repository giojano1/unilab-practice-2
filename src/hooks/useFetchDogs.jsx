import { useEffect, useState } from "react";
import axios from "axios";

const useFetchDogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/data.json");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchDogs;
