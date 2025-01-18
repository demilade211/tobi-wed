import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../common/SectionTitle';
import TextBox from '../form-elements/TextBox';
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const YourPresence = () => {

    const searchParams = useSearchParams()

    const guest = searchParams.get('guest')

    return (
        <Con>
            <SectionTitle title="Your Presence Means the World to Us" />
            <p className='para'>Your presence means the world to us! As we celebrate with a close circle of loved ones, every seat holds a special place in our hearts. Kindly confirm your availability to help us plan this unforgettable evening just for you.</p>
            <div className='form-row'>
                <div className='left'>
                    <img className="" src={`/images/landing/limg.svg`} alt="img" />
                </div>
                <FormCon>
                    <h1 className='first-item'>Guest 1</h1>
                    <TextBox label="First Name" />
                    <TextBox label="Last Name" />
                    <TextBox label="Email" classs='first-item' />

                    {
                        guest &&
                        <>
                            <h1 className='first-item'>Guest 1</h1>
                            <TextBox label="First Name" />
                            <TextBox label="Last Name" />
                        </>
                    }

                    <div className='first-item flex justify-center mt-8'>
                        <Btn>Confirm Attendance</Btn>
                    </div>
                </FormCon>
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
    .form-row{
        width: 100%;
        display: flex;
        align-items: center;
        .left{
            width: 40%;
            padding: 40px; 
            @media (max-width: 1200px) {
                display: none;
            }
        } 
    }
`;

const FormCon = styled.form`
    padding: 30px;
    width: 60%; 
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.20);
    min-height: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    margin-top:30px;
    margin-bottom:15px;
    position: relative;
    justify-content: center;
    @media (max-width: 1200px) { 
        grid-template-columns:100%; 
        width: 100%;
        padding: 20px;
    } 
    h1{
        color: #000; 
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 30px;
        @media (max-width: 1200px) {   
            font-size: 14px;
        }
    }
    .first-item{
        grid-column:1/3;
        @media (max-width: 1200px) { 
            grid-column:1/2;
        } 
    }
`;

const Btn = styled.button`   
  min-width: 300px;
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
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
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

export default YourPresence