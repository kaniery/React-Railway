import "../App.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://railway.bulletinboard.techtrain.dev/threads?offset=0";

export const Home = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response.data);
        setThreads(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="home">
      <h1>新着スレッド</h1>
      <ul>
        {threads.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
