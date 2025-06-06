import { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { CardProps } from '@/interfaces';
import Header from '@/components/layout/Header';

export default function Home() {
  const [cards, setCards] = useState<CardProps[]>([
    { title: 'Card One', content: 'This is the content of the first card.' },
    { title: 'Card Two', content: 'Here is some more content for the second card.' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (newCard: CardProps) => {
    setCards(prev => [...prev, newCard]);
  };

  return (
    <>
    <Header />
        <main className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New Card
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <Card key={idx} title={card.title} content={card.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
      />
    </main>
    </>
    
  );
}
