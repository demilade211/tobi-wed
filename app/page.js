'use client'

import styled from 'styled-components';
import HeroSection from '@/components/landing/HeroSection';
import LandingLayout from '@/layouts/LandingLayouts';

const Home = () => {
  return (
    <Con>
      <HeroSection />
    </Con>
  )
}

const Con = styled.div`  
  width: 100%;
  max-width: 1440px; 
  margin: 0 auto; /* Centers the content */
`;

export default Home