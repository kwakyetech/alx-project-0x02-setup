import React from 'react';
import { CardProps } from '../../interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
