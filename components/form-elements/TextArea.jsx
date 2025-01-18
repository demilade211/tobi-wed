import React from 'react'
import styled from 'styled-components';

const TextArea = ({label,placeholder,name,classs,onChange,value}) => {
  return (
    <TextAreaLabelCon className={classs}>
        <Label>{label}</Label>
        <GreyTextArea type="textarea" placeholder={placeholder} name={name} onChange={onChange} value={value}></GreyTextArea>
    </TextAreaLabelCon>
  )
}

const TextAreaLabelCon = styled.div`
    margin-bottom:20px;
`;

const GreyTextArea = styled.textarea`
    width:100%; 
    min-height:128px;
    background: #FFF; 
    border-radius: 10px;
    border: 1px solid #E0E0E0; 
    color: #545454;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding:15px;
    outline:none;
    &:focus {
        border: 1px solid #1A73E8;
        background: #FFF; 
    }
    @media (max-width: 1200px) { 
        height: 121px;
        border-radius: 10px;
    }
`;

const Label = styled.p`
  color: #666;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom:10px;
  @media (max-width: 1200px) { 
      font-size: 12px;
  }
`;

export default TextArea