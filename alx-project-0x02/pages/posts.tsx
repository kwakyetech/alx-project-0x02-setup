'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
      const data = await res.json();
      const formattedPosts = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
        id: post.id,
      }));
      setPosts(formattedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} content={post.content} userId={post.userId} />
          ))}
        </div>
      </main>
    </>
  );
}
