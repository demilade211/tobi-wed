import React from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import Navbar from './Navbar';

const HeroSection = () => {

    const router = useRouter();

    return (
        <Con  >
            <Navbar />
            <div className='inner'>
                <div className='left'>
                    <div className='row1'>
                        <div className='line'></div>
                        <p className='text'>Our Forever Begins Here</p>
                        <div className='line md:hidden'></div>
                    </div>
                    <div className='row2'>
                        <div className='img-con'>
                            <img className="" src={`/images/landing/heroimg2.png`} alt="img" />
                        </div>
                        <div className='det'>
                            <div className='c-name'>
                                <h1 className='top'>Afolashade</h1>
                                <h1 className='and'>&</h1>
                                <h1 className='bottom'>Oluwatobiloba</h1>
                            </div>

                            <p className='sub'>#ShadesofTee | 21st Febuary 2024 | #Lorem Ipsum</p>
                            <Btn onClick={() => router.push(`/auth/register`)}> RSVP Now</Btn>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <img className="" src={`/images/landing/heroimg.png`} alt="img" />

                </div>
            </div>
        </Con>
    )
}

const Con = styled.div`  
    width: 100%;
    height:100vh;   
    position: relative;
    background: url('/images/landing/herobg.svg') center no-repeat;
    background-size: cover;  
    @media (max-width: 1200px) { 
        height: auto;
        flex-direction: column-reverse; 
    } 
  
    .inner{
        width: 100%;
        display: flex;
        @media (max-width: 1200px) {  
            flex-direction: column-reverse;
            padding: 10px 10px;
        } 
        .left{ 
            width: 54%;     
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media (max-width: 1200px) { 
                width: 100%; 
                align-items: center; 
            }
            .row1{
                display: flex;
                align-items: center;
                margin-bottom: 20px; 
                .line{
                    width: 217px;
                    height: 9px; 
                    background: #974B00;
                    @media (max-width: 1200px) { 
                        width: 83px;
                        height: 2px;
                    }
                }
                .text{
                    color: #000;
                    font-family: Montserrat;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    margin: 0 10px;
                    @media (max-width: 1200px) {
                        font-size: 14px;
                        text-align: center;
                    }
                }
            }
            .row2{
                display: flex; 
                .img-con{
                    width: auto;
                    max-width: 200px;
                    @media (max-width: 1200px) { 
                        display: none;
                    } 
                }
                .det{ 
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .c-name{ 
                        margin-bottom: 10px; 
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
            }
        }
        .right{ 
            width: 46%; 
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