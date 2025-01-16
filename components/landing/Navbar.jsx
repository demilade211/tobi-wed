'use client'

import React, { useState } from "react";
import styled from 'styled-components';
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

const Navbar = () => {

    const router = useRouter();
    const pathname = usePathname()
    const [showNav, setShowNav] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const isActive = route => pathname === route;
    return (
        <LandingNavbarCon>
            <Bottom>
                <div className="logo" onClick={() => router.push(`/`)}>
                    <img src="/images/landing/logo.svg" alt="img" />
                </div>
                <nav>
                    <ul>
                        <li onClick={() => router.push(`/`)}> About US</li>
                        <li onClick={() => router.push(`/faqs`)}>  RSVP Now </li>

                        <li onClick={() => router.push(`/terms`)}>Contact Us</li>

                    </ul>
                </nav>
                <div className="mobile-left">
                    <div className="m-logo" onClick={() => router.push(`/`)}>
                        <img src="/images/landing/logo.svg" alt="img" />
                    </div>
                </div>
                <div className="hidden items-center md:flex invisible">
                    <div className="mr-1">
                        <img src="/images/landing/ham.svg" alt="img" onClick={() => setShowNav(!showNav)} />
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="mr-1">
                        <img src="/images/landing/ham.svg" alt="img" onClick={() => setShowNav(!showNav)} />
                    </div>
                </div>
                <div className={`mobile-nav ${showNav && "active"}`}>
                    <div className="close" onClick={() => setShowNav(false)} >
                        <img src="/images/landing/ham.svg" alt="img" onClick={() => setShowNav(!showNav)} />
                    </div>
                    <ul>
                        <li onClick={() => router.push(`/`)}>Home</li>
                        <li onClick={() => router.push(`/categories`)}>Products</li>
                        <li onClick={() => router.push(`/about`)}>About us</li>
                        <li onClick={() => router.push(`/faq`)}>FAQ</li>
                    </ul>
                </div>
            </Bottom>
        </LandingNavbarCon >
    )
}

const LandingNavbarCon = styled.header`
    width:100%;      

`;



const Bottom = styled.div`
    width:100%;   
    height: 100%;
    padding: 15px 80px; 
    display: flex;
    justify-content: space-between;
    align-items: center;   
    @media (max-width: 1200px) { 
        padding: 20px 15px; 
    }
    .logo{ 
        cursor: pointer;
        @media (max-width: 1200px) { 
            display: none;
        }
        @media (max-width: 600px) { 
            width: 131px; 
        }
    }
    nav{
        @media (max-width: 1200px) { 
            display:none; 
        }
        ul{
            display: flex;
            align-items: center;
            li{
                list-style-type:none; 
                margin:0 30px;
                color: #000;
                text-align: center;  
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal; 
                cursor: pointer;
                position: relative;
                &:hover {  
                    color: #1A73E8; /* Remove background color on hover */  
                    transition: 200ms ease-in;
                } 
                &.active {  
                    color: #1A73E8; /* Remove background color on hover */ 
                    font-weight:700;  
                }  
                
            } 
        }
    }
    .mobile-left{
        display:none; 
        @media (max-width: 1200px) { 
            display:flex;
            align-items:center; 
        }
    }
    .m-logo{
        display: none;
        @media (max-width: 1200px) { 
            display:flex;  
        }
    } 
    .mobile-nav {
        position: absolute;
        width: 80%;
        height: 100vh;
        left: -80%; /* Start off-screen to the left */
        top: 0;
        display: block; /* Change to 'none' when you want to hide it */ 
        border: 0.5px solid rgba(255, 255, 255, 0.04);
        background: #fff;
        padding: 20px 50px;
        opacity: 0; /* Start fully transparent */
        transition: 900ms ease-in;
        transform: translateX(0); /* Start at the original position */
        z-index: 6;

        &.active {
            /* Add a class 'active' when you want to show the navigation */
            left: 0; /* Move it to the original position (fully on-screen) */
            opacity: 1; /* Make it fully visible */
            transform: translateX(0); /* Ensure it's at the original position */
        }

        .close {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-bottom: 40px;
        }

        ul {
            li {
                text-align: left;
                list-style-type: none;
                margin-bottom: 30px;
                color: #000;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }

            .contact {
                border-radius: 10px;
                border: 1px solid #F58634;
                padding: 20px 40px;
            }
        }

        @media (max-width: 1200px) {
            display: block;
        }
    }

`;

const Btn = styled.button` 
    width: 100%; 
    color:${({ color }) => color ? "#666" : "white"};
    background: ${({ color }) => color ? color : "#1A73E8"};  
    border-radius: 10px; 
    font-weight: 600;
    font-size: 16px; 
    transition: 300ms ease-in-out;
    padding: 15px 24px;
    display: flex;
    align-items: center;
    @media (max-width: 1200px) { 
        font-size: 12px;
        height: 45px;
        border-radius: 5px; 
        padding: 9px 15px;
    }
    &:hover{
      transform: scale(1.05);
    }
    

    &:disabled,
    button[disabled]{ 
      background:  ${({ dcolor }) => dcolor ? dcolor : "#ffd1b3"} ;
      color:white;
    }

`;

export default Navbar