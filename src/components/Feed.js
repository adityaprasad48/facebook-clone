import React, { useEffect, useState } from "react";
import db from "./../firebase";
import Messanger from "./Messanger";
import Post from "./Post";
import StoryReel from "./StoryReel";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("post").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  console.log(posts);
  return (
    <div className="feed">
      <StoryReel />
      <Messanger />

      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          image={post.data.image}
          username={post.data.username}
        />
      ))}
    </div>
  );
};

export default Feed;
