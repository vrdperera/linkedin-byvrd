import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { handlePostState, useSSRPostsState } from '../atoms/postAtom';
import Input from './input';
import Post from './post';

export default function Feed({ posts }) {
  const [realTimePosts, setRealTimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);
  console.log('realTimePosts', realTimePosts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const responseData = await response.json();
      setRealTimePosts(responseData);
      setHandlePost(false);
      setUseSSRPosts(false);
    };
    fetchPosts();
  }, [handlePost, setHandlePost, setUseSSRPosts]);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {/* posts  */}
      {!useSSRPosts
        ? Array.from(realTimePosts).map((post) => (
            <Post key={post._id} post={post} />
          ))
        : posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
}
