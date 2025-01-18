import React, { useState } from 'react';
import styled from 'styled-components';

const TextBox = ({ placeholder, label, type, classs, onChange, name, value, errors,step,light }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <InputLabelCon className={classs}>
            {light?<Label2>{label}</Label2>:<Label>{label}</Label>}
            <InputWrapper>
                {type === 'password' ? <GreyInput
                    type={type === 'password' && !showPassword ? 'password' : 'text'}
                    placeholder={placeholder}
                    onChange={onChange}
                    name={name}
                    value={value && value}
                />
                    :
                    <GreyInput
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                        name={name}
                        value={value && value}
                        step={step}
                    />
                }
                {type === 'password' && (
                    <ToggleIcon onClick={togglePasswordVisibility}>
                        {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M8.94175 4.2275C9.29306 4.18682 9.64643 4.16651 10.0001 4.16667C13.8867 4.16667 17.0001 6.58583 18.3334 10C18.0106 10.8305 17.5745 11.6123 17.0376 12.3233M5.43341 5.4325C3.73341 6.47 2.41675 8.0775 1.66675 10C3.00008 13.4142 6.11341 15.8333 10.0001 15.8333C11.6102 15.8418 13.1911 15.4033 14.5667 14.5667M8.23341 8.23333C8.00125 8.4655 7.81708 8.74112 7.69144 9.04446C7.56579 9.3478 7.50112 9.67292 7.50112 10.0012C7.50112 10.3296 7.56579 10.6547 7.69144 10.958C7.81708 11.2614 8.00125 11.537 8.23341 11.7692C8.46558 12.0013 8.7412 12.1855 9.04454 12.3111C9.34788 12.4368 9.673 12.5015 10.0013 12.5015C10.3297 12.5015 10.6548 12.4368 10.9581 12.3111C11.2615 12.1855 11.5371 12.0013 11.7692 11.7692" stroke="#545454" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.3335 3.33333L16.6668 16.6667" stroke="#545454" stroke-linecap="round" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z" stroke="#545454" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.66675 10C3.00008 6.58584 6.11341 4.16667 10.0001 4.16667C13.8867 4.16667 17.0001 6.58584 18.3334 10C17.0001 13.4142 13.8867 15.8333 10.0001 15.8333C6.11341 15.8333 3.00008 13.4142 1.66675 10Z" stroke="#545454" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        )}
                    </ToggleIcon>
                )}
            </InputWrapper>
            {errors?.inputName === name && errors?.isError && <ErrorMessage>{errors.message}</ErrorMessage>}
        </InputLabelCon>
    );
};

const InputLabelCon = styled.div`
    width: 100%; 
    margin-bottom: 20px;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const ToggleIcon = styled.div`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

const ErrorMessage = styled.div` 
    color: red; 
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top:5px;
`;

const GreyInput = styled.input`
    width: 100%; 
    height: 44px; 
    background: #FFF; 
    border-radius: 10px;
    border: 1px solid #E0E0E0; 
    color: #545454;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 275;
    line-height: normal;
    padding: 14px 28px;
    outline: none;
    &:focus {
        border: 1px solid #974B00;;
        background: #FFF; 
    }
    @media (max-width: 1200px) { 
        height: 45px;
    }
`;

const Label = styled.p`
    color: #666;
    font-family: Montserrat;
    font-size: 16px;
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

export default TextBox;
