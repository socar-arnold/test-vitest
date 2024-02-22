"use client";

import React, { useEffect } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const About = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    await fetch("http://cloud-sanghun-dfd.com/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts as Post[]));

    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main>
      <h1>About</h1>
      {isLoading && <span aria-label="loading">Loading...</span>}
      {posts.length > 0 &&
        posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
    </main>
  );
};

export default About;
