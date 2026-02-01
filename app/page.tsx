import HeroSection from '@/components/sections/hero-section';
import ExploreGrid from '@/components/sections/explore-grid';
import ExperienceAdventure from '@/components/sections/experience-adventure';
import DiscoverSection from '@/components/sections/discover-section.tsx';
import TravelSection from '@/components/sections/travel-section';
import FAQSection from '@/components/sections/faq-section';
import PromoHeroSection from '@/components/sections/promo-section';
import BlogSection from '@/components/sections/blog-section';
import TravelHeroDesktopSection from '@/components/sections/travel-hero-desktop-section';
import TravelHeroMobileSection from '@/components/sections/travel-hero-mobile-section';

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
