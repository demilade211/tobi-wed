import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';

const JoinUs = () => {
    return (
        <Con>
            <SectionTitle title="Join Us for the Celebration" />
            <p className='para'>An enchanting evening of love, laughter, and cherished memories awaits. Join us for an intimate dinner dining experience with friends and family as we celebrate our union under the stars.</p>
            <div className='det flex items-center'>
                <div className='col flex items-center flex-col md:flex-row'>
                    <img className="mr-3" src={`/images/landing/cal.svg`} alt="img" />
                    <p className='big mr-3'>21st</p>
                    <div>
                        <p className='small'>Febuary</p>
                        <p className='small'>2025 </p>
                    </div>
                </div>
                <div className='line'></div>
                <div className='col flex items-center flex-col md:flex-row'>
                    <img className="mr-3" src={`/images/landing/clock.svg`} alt="img" />
                    <p className='big mr-3'>03:00</p>
                    <div>
                        <p className='small'>Post</p>
                        <p className='small'>Meridiem</p>
                    </div>
                </div>
                <div className='line'></div>
                <div className='col flex items-center flex-col md:flex-row'>
                    <img className="mr-3" src={`/images/landing/loc.svg`} alt="img" />
                    <p className='big mr-3'>LAG</p>
                    <div>
                        <p className='small'>Magodo</p>
                        <p className='small'>Phase 1</p>
                    </div>
                </div>
            </div>
            <div className='red-con'>
                <div className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M1.37731 7.94205C1.45397 7.52205 1.79264 7.09338 2.33864 6.72205C3.32264 6.05538 4.44531 6.05805 5.57064 6.01672C5.94397 6.00338 6.94531 5.99805 7.99997 6.00072C9.05464 5.99805 10.0566 6.00272 10.4293 6.01672C11.554 6.05805 12.6773 6.05538 13.6613 6.72272C14.208 7.09338 14.546 7.52272 14.6226 7.94272C14.6893 8.30272 14.6786 9.53872 14.6026 10.4114C14.5626 10.8714 14.5213 11.0954 14.4606 11.1894C14.276 11.4734 13.7446 11.7127 12.962 11.8627C12.228 12.0027 12.3373 12 7.99997 12C3.66264 12 3.77197 12.0034 3.03797 11.862C2.25531 11.7127 1.72397 11.4734 1.53931 11.1894C1.47864 11.096 1.43731 10.8714 1.39731 10.4114C1.32131 9.53872 1.31064 8.30272 1.37731 7.94205Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 6.00004L3.87533 2.99338C3.95533 2.79338 4.112 2.62671 4.33266 2.55138C6.49466 1.81604 9.506 1.81604 11.6673 2.55138C11.8873 2.62671 12.044 2.79338 12.1247 2.99338L13 6.00004M1.66667 8.00004L2.66667 8.33338M14.3333 8.00004L13.3333 8.33338M5.33333 11.6667L5.49733 11.2574C5.74067 10.6487 5.86267 10.344 6.11667 10.172C6.37 10 6.698 10 7.354 10H8.646C9.302 10 9.63 10 9.88333 10.172C10.1367 10.344 10.2593 10.6487 10.5033 11.2574L10.6667 11.6667M4.668 12.3747V12.9094C4.668 13.4927 4.642 13.602 4.466 13.772C4.39559 13.8346 4.31765 13.8881 4.234 13.9314C4.1 13.998 4.05533 14 3.01867 14C1.95867 14 1.93933 13.9987 1.776 13.9254C1.68042 13.8803 1.59389 13.8182 1.52067 13.742C1.346 13.532 1.33733 13.47 1.336 12.364V10M11.332 12.3747V12.9094C11.332 13.4927 11.358 13.602 11.534 13.772C11.5853 13.822 11.69 13.8934 11.766 13.9314C11.9 13.998 11.9447 14 12.9813 14C14.0413 14 14.0607 13.9987 14.224 13.9254C14.3153 13.884 14.4307 13.8014 14.4793 13.742C14.654 13.532 14.6627 13.47 14.664 12.364V10M13.3333 6.00004L14.3333 5.66671M2.66667 6.00004L1.66667 5.66671" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>Free parking available at the reception venue</p>
                </div>
                <div className='line'></div>
                <div className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_7_114)">
                            <path d="M7.99999 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 7.99999 1.33337C4.3181 1.33337 1.33333 4.31814 1.33333 8.00004C1.33333 11.6819 4.3181 14.6667 7.99999 14.6667Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 10.6667V8.00004M8 5.33337H8.00667" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_7_114">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Your downloaded pass is your access to the event</p>
                </div>
                <div className='line'></div>
                <div className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_7_114)">
                            <path d="M7.99999 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 7.99999 1.33337C4.3181 1.33337 1.33333 4.31814 1.33333 8.00004C1.33333 11.6819 4.3181 14.6667 7.99999 14.6667Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 10.6667V8.00004M8 5.33337H8.00667" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_7_114">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Kindly arrive 15 minutes early for the ceremony to be seated</p>
                </div>
            </div>
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
    .det{
        margin-bottom: 30px;
        .col{
            img{
                @media (max-width: 1200px) {
                    width: 24px;
                    height: 24px;
                }
                
            }
        }
        .big{
            color: #000;
            text-align: center;
            font-family: Montserrat;
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            @media (max-width: 1200px) {
                font-size: 20px;
                margin: 10px 0;
            }
        }
        .small{
            color: #000;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            @media (max-width: 1200px) {
                font-size: 12px;
            }
        }
        .line{
            width: 1px;
            height: 92px;
            background: #000;
            margin: 0 20px;
            @media (max-width: 1200px) {
                width: 1px;
                height: 21px;
            }
            
        }
    }
    .red-con{ 
        border-radius: 10px;
        background: rgba(255, 0, 0, 0.30);
        padding: 11px 22px;
        display: flex;
        flex-wrap: wrap;
        .col{
            display: flex;
            align-items: center;
            p{
                color: #000;
                text-align: center;
                font-family: Montserrat;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                @media (max-width: 1200px) {
                    font-size: 10px;
                    text-align: left;
                }
            }
            svg{
                margin-right: 10px;
            }
        }
        .line{
            width: 1px;
            height: 20px;
            background: #000;
            margin: 0 10px;
            @media (max-width: 1200px) {
                display: none;
            }
        }
    }
`;

export default JoinUs