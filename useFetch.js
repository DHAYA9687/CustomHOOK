import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(async (url) => {
    try {
      await fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch data");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setError(null);
        });
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  }, []);
  return { data, loading, error };
};

export default useFetch;
