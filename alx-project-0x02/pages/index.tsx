import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project</title>
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to ALX Project with Next.js!</h1>
      </main>
    </>
  );
}
