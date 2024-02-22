import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ServerMSW = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main>
      <h1>About</h1>

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

export const getServerSideProps = (async () => {
  // Fetch data from external API
  let posts: Post[] = [];
  try {
    const res = await fetch("http://arnold-socar.com/posts");
    console.log(res);

    posts = await res.json();
  } catch (e) {
    console.error(e);
  }

  // Pass data to the page via props
  return { props: { posts } };
}) satisfies GetServerSideProps<{ posts: Post[] }>;

export default ServerMSW;
