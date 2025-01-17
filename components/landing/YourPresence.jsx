import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';

const YourPresence = () => {
    return (
        <Con>
            <SectionTitle title="Your Presence Means the World to Us" />
            <p className='para'>Your presence means the world to us! As we celebrate with a close circle of loved ones, every seat holds a special place in our hearts. Kindly confirm your availability to help us plan this unforgettable evening just for you.</p>
        </Con>
    )
}

const Con = styled.div`  
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 50px;
    @media (max-width: 1200px) {
        padding: 20px;
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

export default YourPresence