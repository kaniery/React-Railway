import "../App.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://railway.bulletinboard.techtrain.dev/threads?offset=0";

export const Home = () => {
  const [thread, setThread] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setThread(response.data);
    });
  }, []);

  return (
    <div className="home">
      <h1>新着スレッド</h1>
      <ul>
        {thread.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
