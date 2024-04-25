import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const baseURL = "https://railway.bulletinboard.techtrain.dev/threads";

export const Newthread = () => {
  const [newthreads, setNewThreads] = useState("");

  const CreateThread = () => {
    axios
      .post(baseURL, {
        title: `${newthreads}`,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="newthread">
      <h1>スレッド新規作成</h1>
      <p>
        <input
          type="text"
          name="threadname"
          className="threadtitle"
          value={newthreads}
          onChange={(e) => setNewThreads(e.target.value)}
          placeholder={`スレッドタイトル`}
        />
      </p>
      <Link to={`/`}>
        <span className="backhome">ホームに戻る</span>
      </Link>
      <button
        type="submit"
        name="createthread"
        className="createbutton"
        onClick={CreateThread}
      >
        作成
      </button>
    </div>
  );
};
export default Newthread;
