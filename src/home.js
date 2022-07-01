import React, { useEffect, useState } from "react";
import "./App.css";


function Home() {
  const [apiData, setApiData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/photos";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setApiData(json);
      });
  }, []);

  return (
    <>
      <div className="api_data 000">
        {apiData.map((item) => {
          return <img src={item.url} className="select_image" />;
        })}
      </div>
    </>
  );
}

export default Home;
