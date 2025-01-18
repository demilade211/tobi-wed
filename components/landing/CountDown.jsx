import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';
import CalendarFlipCountdown from './FlipClock';

const CountDown = () => {
    return (
        <Con>
            <SectionTitle title="Countdown With Us" />
            <p className='para'>Thank you for being part of our special day! Your love, support, and presence mean more to us than words can express. We're so grateful to have shared this beautiful moment with you and look forward to cherishing the memories we've created together. Here's to love, laughter, and the bonds that bring us closer!"</p>
            <CalendarFlipCountdown />
        </Con>
    )
}

const Con = styled.div`  
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 50px;
    padding-bottom: 100px;
    @media (max-width: 1200px) {
        padding: 40px 20px;
    }
    .para{
        width: 70%;
        color: #000;
        text-align: center;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 40px;
        @media (max-width: 1200px) {
            font-size: 12px;
        }
    }
`;
export default CountDown