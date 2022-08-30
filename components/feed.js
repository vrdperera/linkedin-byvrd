import { useEffect, useState } from 'react';
import Input from './input';

export default function Feed() {
  const [realTimePosts, setRealTimePosts] = useState([]);
  console.log(realTimePosts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const responseData = await response.json();
      setRealTimePosts(responseData);
    };
    fetchPosts();
  }, []);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {/* posts  */}
    </div>
  );
}
