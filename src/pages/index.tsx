import { useEffect, useState } from 'react';
import PageWrapper from '@/components/PageWrapper';
import UserPost from '../components/Post';
import { getPosts, IPost } from '../services/api';
import '../styles/globals.css';

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getPosts()
        setPosts(data)
      } catch (error) {
        console.error('Error loading posts:', error)
      }
    }

    loadPosts()
  }, [])

  return (
    <PageWrapper>
        {posts.map((post) => (
          <UserPost key={post.id} {...post} />
        ))}
    </PageWrapper>
  );
}