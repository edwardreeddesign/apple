import { Hero, Highlights, Navbar } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-black">
      {/* navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Highlights */}
      <Highlights />
    </main>
  );
}
