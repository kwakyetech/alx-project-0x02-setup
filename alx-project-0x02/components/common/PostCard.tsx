import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-md shadow-md p-4 bg-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm mt-2">{content}</p>
      <p className="text-xs text-gray-500 mt-4">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
