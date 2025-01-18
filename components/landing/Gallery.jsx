import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';
import useEmblaCarousel from 'embla-carousel-react'
import EmblaCarousel from '../common/EmblaCarousel';


const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = [
    "/images/landing/gallery/img1.jpg",
    "/images/landing/gallery/img2.jpg",
    "/images/landing/gallery/img3.jpg",
    "/images/landing/gallery/img4.jpg",
    "/images/landing/gallery/img5.jpg",
    "/images/landing/gallery/img7.jpg",
    "/images/landing/gallery/img10.jpg",
    "/images/landing/gallery/img11.jpg",
    "/images/landing/gallery/img12.jpg",
    "/images/landing/gallery/img13.jpg",
    "/images/landing/gallery/img14.jpg",
    "/images/landing/gallery/img15.jpg",
    "/images/landing/gallery/img16.jpg",
    "/images/landing/gallery/img18.jpg",
    "/images/landing/gallery/img19.jpg",
    "/images/landing/gallery/img20.jpg",
    "/images/landing/gallery/img21.jpg",
    "/images/landing/gallery/img22.jpg",
    "/images/landing/gallery/img23.jpg",
    "/images/landing/gallery/img25.jpg",
    "/images/landing/gallery/img26.jpg",
    "/images/landing/gallery/img27.jpg",
    "/images/landing/gallery/img29.jpg",
    "/images/landing/gallery/img30.jpg",
    "/images/landing/gallery/img31.jpg",
    "/images/landing/gallery/img32.jpg",

]

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