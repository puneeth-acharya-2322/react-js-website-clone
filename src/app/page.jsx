import React from 'react';
import AnnouncementBar from '@/components/sections/AnnouncementBar';
import Header from '@/components/sections/Header';
import HeroSlider from '@/components/sections/HeroSlider';
import AllCollections from '@/components/sections/AllCollections';
import Marquee from '@/components/sections/Marquee';
import ShopByMaterial from '@/components/sections/ShopByMaterial';
import ShopByCategory from '@/components/sections/ShopByCategory';
import VideoFeature from '@/components/sections/VideoFeature';
import InstagramFeed from '@/components/sections/InstagramFeed';
import ServiceFeatures from '@/components/sections/ServiceFeatures';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F4F4]">
      <AnnouncementBar />
      <Header />
      <HeroSlider />
      <AllCollections />
      <Marquee />
      <ShopByMaterial />
      <ShopByCategory />
      <VideoFeature />
      <InstagramFeed />
      <ServiceFeatures />
      <Footer />
    </main>
  );
}
