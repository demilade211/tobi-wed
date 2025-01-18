import React from 'react'
import styled from 'styled-components';

const SectionTitle = ({title}) => {
    return (
        <Con>
            <img className="" src={`/images/landing/to.png`} alt="img" />
            <h1>{title}</h1>
            <img className="" src={`/images/landing/bo.svg`} alt="img" />
        </Con>
    )
}

const Con = styled.div`  
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h1{
    color: #974B00;
    font-family: "Passions Conflict";
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (max-width: 1200px) {
        font-size: 25px;
        text-align: center;
    }
  }
  img{
    @media (max-width: 1200px) {
        width: 46px;
        height: 18px;
    }
  }
`;

export default SectionTitle