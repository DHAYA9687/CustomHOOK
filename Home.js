import React from "react";
import useFetch from "./useFetch";
const Home = () => {
  const { data, loading, error } = useFetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  );
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.explanation}</p>
          <img src={data.url} alt={data.title} />
        </div>
      )}
    </div>
  );
};

export default Home;
