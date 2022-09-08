import React, { useState, useEffect } from "react";
import Main from "../main/Main";

const Home = () => {
  const [showPosts, setShowPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts");
    setShowPosts(await response.json());
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h2>
        That's a great goal. How long have you been struggling with your sleep?
      </h2>
      {showPosts.map((post, i) => (
        <Main key={post.id} title={post.title} />
      ))}
    </div>
  );
};

export default Home;
