import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckBox = ({ placeholder, label, type, classs, onChange, name, value, errors,step,light }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <InputLabelCon className={classs}>
            {light?<Label2>{label}</Label2>:<Label>{label}</Label>}
            <Checkbox {...label} defaultChecked  onChange={onchange}/>
        </InputLabelCon>
    );
};

const InputLabelCon = styled.div`
    width: 100%; 
    margin-bottom: 20px;
`;
 
 

 

const Label = styled.p`
    color: #666;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;
    @media (max-width: 1200px) { 
        font-size: 12px;
    }
`;

const Label2 = styled.p`
  color: #666;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
  @media (max-width: 1200px) { 
    font-size: 12px;
  }
`; 

export default CheckBox;
