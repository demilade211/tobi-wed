'use client'

import React, { useRef } from 'react';
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

  const yourPresenceRef = useRef(null);

  const scrollToYourPresence = () => {
    if (yourPresenceRef.current) {
      yourPresenceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Suspense>
      <Con>
        <HeroSection scrollToYourPresence={scrollToYourPresence}/>
        <OurStory />
        <JoinUs />
        <YourPresence ref={yourPresenceRef}/>
        <Gallery />
        <CountDown />
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