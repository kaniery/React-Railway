import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const baseURL =
  "https://railway.bulletinboard.techtrain.dev/threads/2c9b1edd-5859-4f74-98cf-5c27bba3f9ce/posts?offset=0";

export const Thread = () => {
  const [posts, setPosts] = useState([]);
  const [newpost, setNewpost] = useState("");

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const CreateNewPost = () => {
    axios
      .post(
        "https://railway.bulletinboard.techtrain.dev/threads/2c9b1edd-5859-4f74-98cf-5c27bba3f9ce/posts",
        {
          post: `${newpost}`,
        }
      )
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="thread">
      <h1>一覧</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.post}</li>
        ))}
      </ul>
      <p>
        <input
          type="text"
          value={newpost}
          onChange={(e) => setNewpost(e.target.value)}
          placeholder={`投稿`}
        />
      </p>
      <button type="submit" onClick={CreateNewPost}>
        投稿
      </button>
    </div>
  );
};

export default Thread;
