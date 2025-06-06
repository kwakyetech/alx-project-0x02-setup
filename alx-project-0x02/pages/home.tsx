import Header from '../components/layout/Header';

export default function Home() {
  return (
    
    <>
    <Header />
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4">This is the home page content.</p>
    </main>
    </>
  );
}