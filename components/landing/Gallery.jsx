import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel from '../common/EmblaCarousel';


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Gallery = () => {
  return (
    <Con>
        <SectionTitle title="Our Love Gallery" />
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </Con>
  )
}

const Con = styled.div`  
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 50px;
    @media (max-width: 1200px) {
        padding: 20px;
    }
`;

export default Gallery