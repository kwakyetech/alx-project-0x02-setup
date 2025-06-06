import Card from '../components/common/Card';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Card One" content="This is the content of the first card." />
            <Card title="Card Two" content="Here is some more content for the second card." />
          </div>
      </main>
    </>
    
  );
}
// This is the main home page of the application.
// It uses the Card component to display two cards with sample content.