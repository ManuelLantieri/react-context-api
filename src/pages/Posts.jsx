import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "La ricetta perfetta per una torta",
    content: "Ecco come fare una torta perfetta...",
  },
  {
    id: 2,
    title: "I biscotti che non puoi perdere",
    content: "Scopri la nostra ricetta per biscotti croccanti...",
  },
  {
    id: 3,
    title: "La macedonia estiva",
    content: "Un mix fresco e sano di frutta di stagione...",
  },
];

const Posts = () => {
  return (
    <div>
      <h1>Lista dei Post</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
