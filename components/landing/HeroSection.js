import React from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'

const HeroSection = () => {

    const router = useRouter();

    return (
        <Con  >
            <div className='left'>
                <div className='c-name'>
                    <h1 className='top'>Afolashade</h1>
                    <h1 className='and'>&</h1>
                    <h1 className='bottom'>Oluwatobiloba</h1>
                </div>

                <p className='sub'>#ShadesofTee | 21st Febuary 2024 | #Lorem Ipsum</p>
                <Btn onClick={() => router.push(`/auth/register`)}> RSVP Now</Btn>
            </div>
            <div className='right'>
                <img className="" src={`/images/landing/heroimg.png`} alt="img" />

            </div>
        </Con>
    )
}

const Con = styled.div`  
  width: 100%;
  height:80vh; 
  display: flex;
  position: relative;
  @media (max-width: 1200px) { 
    height: auto;
    flex-direction: column-reverse;
    padding: 40px 10px;
  } 
  
  .left{
    width: 50%;   
    padding-left: 50px;
    border: 1px solid #000;
    @media (max-width: 1200px) { 
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 0;
    }
    .c-name{ 
        margin-bottom: 10px;
        border: 1px solid #000; 
        display: inline-block; 
        h1{ 
            color: #974B00;
            font-family: "Passions Conflict";
            font-size: 120px;
            font-style: normal;
            font-weight: 400;  
            line-height: 1;
            @media (min-width: 2000px) { 
                font-size: 75px; 
            }
            @media (max-width: 1200px) { 
                font-size: 80px;
                text-align: center;
            } 
            &.top{
                margin-bottom: -80px;
                @media (max-width: 1200px) { 
                    margin-bottom: -40px;
                }
            }
            &.bottom{
                margin-top: -100px;
                margin-left: 25px;
                @media (max-width: 1200px) { 
                    margin-top: -50px;
                }
            }
        }
        .and{ 
            color: rgba(0, 0, 0, 0.20);
            font-family: "Passions Conflict";
            font-size: 150px;
            font-style: normal;
            font-weight: 400;
            line-height: 1; 
            text-align: center;
            margin-left: -100px;
            @media (max-width: 1200px) { 
                font-size: 80px;  
                margin-left: 0;
            } 
        }
    }
    .sub{
      color: #000; 
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      margin-bottom: 30px;
      @media (min-width: 2000px) { 
        font-size: 35px; 
      }
      @media (max-width: 1200px) { 
        font-size: 14px;
        text-align: center;
      }
    }  
  }
  .right{
    width: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;  
    @media (max-width: 1200px) { 
      width: 100%; 
    }
    img{ 
      max-width: 550px; 
      @media (max-width: 1200px) { 
        max-width: 350px;
      } 
      @media (min-width: 1600px) { 
        max-width: 700px;
      } 
    }
  } 
    
`;

const Btn = styled.button`   
  width: 100%;
  height: 43px;
  display: flex;
  justify-content:center;
  align-items:center;
  padding: 12px 24px;  
  border:none;
  border-radius: 10px;
  background: #974B00;
  line-height: normal; 
  color: #FFF; 
  text-align: center; 
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  cursor:pointer;
  outline:none;
  @media (max-width: 1200px) { 
      width: 80%; 
      height: 30px;
      border-radius: 5px;
  } 
  @media (min-width: 2000px) { 
      padding: 30px 40px;
      font-size: 30px; 
  }
`;

export default HeroSection