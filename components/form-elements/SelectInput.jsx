import React from 'react'
import styled from 'styled-components';
import { selectStyle } from "@/utils/CustomStyles"
import Select from 'react-select'



const SelectInput = ({ label, options, onChange, classs, value, place, big, isDisabled, light }) => {

  //const sel = big?selectStyle2:selectStyle

  return (
    <InputLabelCon className={classs}>
      {light?<Label2>{label}</Label2>:<Label>{label}</Label>}
      <Select options={options} isDisabled={isDisabled} styles={selectStyle} value={value} onChange={onChange} placeholder={`${place || "Select an option"}`} />
    </InputLabelCon>
  )
}

const InputLabelCon = styled.div`
    margin-bottom:30px;
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

export default SelectInput