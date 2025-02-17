import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "../context/AlertContext";

const Posts = () => {
  const { showAlert } = useAlert();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Torta Perfetta",
      content: "Scopri come fare una torta soffice...",
    },
    {
      id: 2,
      title: "Biscotti Croccanti",
      content: "La ricetta per i biscotti più croccanti!",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    new Promise((resolve) => {
      setTimeout(() => resolve({ id: posts.length + 1, title, content }), 1000);
    })
      .then((newPost) => {
        setPosts([...posts, newPost]);
        showAlert("Post creato con successo!", "success"); // ALERT SUCCESSO
        setTitle("");
        setContent("");
      })
      .catch(() => {
        showAlert("Errore nella creazione del post!", "error"); // ALERT ERRORE
      });
  };

  return (
    <div>
      <h1>Lista dei Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titolo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Contenuto"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Crea Post</button>
      </form>

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
