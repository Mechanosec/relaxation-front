import React, { useState } from "react";
import Post from "./components/Post";
import "./styles/App.css";

function App() {
  const [posts] = useState([
    { id: 1, title: "some title", body: "description" },
    { id: 2, title: "some title", body: "description" },
  ]);
  return (
    <div className="App">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
