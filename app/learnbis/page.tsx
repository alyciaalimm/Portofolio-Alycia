import LearnBISPortfolio from '@/components/LearnBISPortfolio';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';

export default function LearnBISPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <LearnBISPortfolio />
      <Contact />
    </main>
  );
}