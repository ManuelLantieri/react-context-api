import React from "react";
import { useParams, Link } from "react-router-dom";

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

const PostDetail = () => {
  const { id } = useParams();
  const postId = parseInt(id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <h2>Post non trovato</h2>;
  }

  const prevPost = posts.find((p) => p.id === postId - 1);
  const nextPost = posts.find((p) => p.id === postId + 1);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <div>
        {prevPost && (
          <Link to={`/posts/${prevPost.id}`}>← {prevPost.title}</Link>
        )}
        {nextPost && (
          <Link to={`/posts/${nextPost.id}`} style={{ marginLeft: "20px" }}>
            {nextPost.title} →
          </Link>
        )}
      </div>

      <br />
      <Link to="/posts">← Torna alla lista dei post</Link>
    </div>
  );
};

export default PostDetail;
