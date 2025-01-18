'use client'

import React from 'react'
import styled from 'styled-components';

const Button = ({ content, onClick, disabled, color,dcolor }) => {
    return (
        <>
            <Btn onClick={onClick} disabled={disabled} color={color} dcolor={dcolor}>{content}</Btn>
        </>
    )
}

const Btn = styled.button` 
    width: 100%;
    height: 50px; 
    color:white;
    background: ${({color})=>color?color:"#1A73E8"};  
    border-radius: 10px; 
    font-weight: 700;
    font-size: 16px;
    margin-bottom:20px;
    transition: 300ms ease-in-out;
    @media (max-width: 1200px) { 
        font-size: 12px;
        height: 45px;
        border-radius: 10px; 
    }
    &:hover{
      transform: scale(1.05);
    }
    

    &:disabled,
    button[disabled]{ 
      background:  ${({dcolor})=>dcolor?dcolor:"#8bb8f4"} ;
      color:white;
    }

`;

export default Button