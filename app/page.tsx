import HeroSection from './component/sections/hero-section';
import ExploreGrid from './component/sections/explore-grid';
import ExperienceAdventure from './component/sections/experience-adventure';
import DiscoverSection from './component/sections/discover-section.tsx';
import TravelSection from './component/sections/travel-section';
import FAQSection from './component/sections/faq-section';
import PromoHeroSection from './component/sections/promo-section';
import BlogSection from './component/sections/blog-section';
import TravelHeroDesktopSection from './component/sections/travel-hero-desktop-section';
import TravelHeroMobileSection from './component/sections/travel-hero-mobile-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExploreGrid />
      <ExperienceAdventure />
      <DiscoverSection />
      <TravelHeroDesktopSection className="hidden lg:block" />
      <TravelHeroMobileSection className="block lg:hidden" />
      <TravelSection />
      <FAQSection />
      <BlogSection />
      <PromoHeroSection />
    </>
  );
}
