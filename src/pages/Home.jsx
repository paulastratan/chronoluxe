import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import ArrivalsSection from '../components/ArrivalsSection';
import SelectionsSection from '../components/SelectionsSection';
import TopWatches from '../components/TopWatches';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ArrivalsSection />
      <SelectionsSection/>
      <TopWatches/>
      <ProductSection/>
      <Footer/>
    </>
  );
}

export default Home;