
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <SubscriptionPlans />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
