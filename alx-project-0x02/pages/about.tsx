import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <>
      <Header />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold">About Us</h1>

        <div className="flex gap-4 flex-wrap">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
