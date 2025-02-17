import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "../context/AlertContext";
import { useSearch } from "../context/SearchContext";

const Posts = () => {
  const { showAlert } = useAlert();
  const { searchQuery } = useSearch();
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

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Lista delle merende</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nome merenda"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="descrizione"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">aggiungi merenda</button>
      </form>

      <ul>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))
        ) : (
          <p>Nessuna merenda trovata trovata</p>
        )}
      </ul>
    </div>
  );
};

export default Posts;
