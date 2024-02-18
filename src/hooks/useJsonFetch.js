import axios from "axios";
import { useEffect, useState } from "react";

export default function useJsonFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((response) => {
        setData(response.data)
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [url])

  return [data, loading, error];
}
