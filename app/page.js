'use client'

import styled from 'styled-components';
import HeroSection from '@/components/landing/HeroSection';
import LandingLayout from '@/layouts/LandingLayouts';
import OurStory from '@/components/landing/OurStory';
import JoinUs from '@/components/landing/JoinUs';
import YourPresence from '@/components/landing/YourPresence';
import Gallery from '@/components/landing/Gallery';
import { Suspense } from 'react' 
import CountDown from '@/components/landing/CountDown';

const Home = () => {
  return (
    <Suspense>
      <Con>
        <HeroSection />
        <OurStory />
        <JoinUs />
        <YourPresence />
        <Gallery />
        <CountDown/>
      </Con>
    </Suspense>
  )
}

const Con = styled.div`  
  width: 100%;
  max-width: 1440px; 
  margin: 0 auto; /* Centers the content */
`;

export default Home 