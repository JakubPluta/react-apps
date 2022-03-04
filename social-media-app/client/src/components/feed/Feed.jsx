import React from "react";
import { Posts } from "../../dummyPosts";
import Post from "../post/Post";
import Share from "../share/Share";
import './feed.css'
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
