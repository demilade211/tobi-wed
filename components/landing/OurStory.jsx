import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';

const OurStory = () => {
    return (
        <Con>
            <WhiteCon>
                <SectionTitle title="Our Love Story"/>

                <p className='para'>We met physically on a Saturday in  2019 at the assembly ground at Mowe . Separately invited to the assembly by one person. We had both been having phone conversations prior to that time and it just happened to be a coincidence that we met physically that weekend.</p>

                <p className='para'>I remember when we started having phone conversations, our calls and chats were so comfortable and soothing. It felt like we were friends who had known each other for years. It just clicked and i enjoyed the feeling. We'll talk deep into the night sharing experiences, laughing and giggling and would always look forward to hearing from each other the next day .</p>

                <p className='para'>Oluwatobiloba asked me to marry Him at a rooftop on a calm Saturday evening. Amidst close friends and family I said a very certain YES. The proposal was intentional, special and memorable. To think I had an hint but still ended up surprised was hilarious. It was a beautiful day that i will remember for years to come .</p>

                <p className='para'>Today, 21/2/2025 is a special one to us and we are glad you are joining us to celebrate this jorney of undiluted love between best friends and lovebirds.</p>

                <div className='last-row'>
                    <p className='r1'>— Shulammite</p>
                    <p className='r2'>“I have found the one whom my soul loves.”</p>
                    <p className='r1'>— Song of Solomon 3:4</p>
                </div>
            </WhiteCon>
        </Con>
    )
}

const Con = styled.div`  
    width: 100%; 
    display: flex;
    justify-content: center;
    padding: 50px 50px;
    @media (max-width: 1200px) {
        padding: 20px;
    }
`;

const WhiteCon = styled.div`  
    width: 100%; 
    min-height: 419px;
    border-radius: 20px;
    background: #FFF;
    padding: 20px 40px;
    @media (max-width: 1200px) {
        padding: 20px;
    }
    .para{
        color: #000;
        text-align: center;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 20px;
        @media (max-width: 1200px) {
            font-size: 12px;
            text-align: center;
        }
    }
    .last-row{
        .r1{
            color: #000;
            text-align: center;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        .r2{
            color: #000;
            font-family: "Moon Dance";
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-align: center;
            @media (max-width: 1200px) {
                font-size: 20px; 
            } 
        }
    }
`;

export default OurStory