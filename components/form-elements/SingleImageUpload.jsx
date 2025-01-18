import React from 'react';
import styled from 'styled-components';

const SingleImageUpload = ({ label, onChange, classs, inputRef, selectedFile, setSelectedFile }) => {
    return (
        <TextAreaLabelCon className={classs}>
            <Label>{label}</Label>
            <GreyTextArea onClick={() => inputRef?.current?.click()}>
                <input
                    id='imageInput'
                    name='media'
                    type="file"
                    accept="image/*"
                    hidden
                    ref={inputRef}
                    onChange={onChange}
                />
                <svg className='mb-4' xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                    <path d="M26.6588 12.9875C18.3962 11.8525 11.2713 17.9875 11.75 26.125M8.625 10.5C8.625 11.163 8.88839 11.7989 9.35723 12.2678C9.82607 12.7366 10.462 13 11.125 13C11.788 13 12.4239 12.7366 12.8928 12.2678C13.3616 11.7989 13.625 11.163 13.625 10.5C13.625 9.83696 13.3616 9.20107 12.8928 8.73223C12.4239 8.26339 11.788 8 11.125 8C10.462 8 9.82607 8.26339 9.35723 8.73223C8.88839 9.20107 8.625 9.83696 8.625 10.5Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.25 16.8321C7.725 16.3508 10.8437 18.0296 12.53 20.7071" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.25 12.25C4.25 9.45 4.25 8.05 4.795 6.98C5.27436 6.03923 6.03923 5.27436 6.98 4.795C8.05 4.25 9.45 4.25 12.25 4.25H18.75C21.55 4.25 22.95 4.25 24.02 4.795C24.9608 5.27436 25.7256 6.03923 26.205 6.98C26.75 8.05 26.75 9.45 26.75 12.25V18.75C26.75 21.55 26.75 22.95 26.205 24.02C25.7256 24.9608 24.9608 25.7256 24.02 26.205C22.95 26.75 21.55 26.75 18.75 26.75H12.25C9.45 26.75 8.05 26.75 6.98 26.205C6.03923 25.7256 5.27436 24.9608 4.795 24.02C4.25 22.95 4.25 21.55 4.25 18.75V12.25Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>Click here to select an image or drop your image here</p>
            </GreyTextArea>
            {selectedFile && (
                <div className='img-con'>
                    <div className='img'>
                        <img
                            src={URL.createObjectURL(selectedFile)}
                            alt="Preview"
                        />
                    </div>
                    <p onClick={() => setSelectedFile(null)} className='clear'>Clear</p>
                </div>
            )}
        </TextAreaLabelCon>
    )
}

const TextAreaLabelCon = styled.div`
    width: 100%;
    margin-bottom: 20px;
    .img-con {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .img {
            width: 60px;
            height: 60px;
            margin-right: 10px;
            border-radius: 12px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 12px;
            }
        }
        .clear {
            color: red;
            cursor: pointer;
        }
    }
`;

const GreyTextArea = styled.div`
    width: 100%;
    height: 160px;
    border-radius: 12px;
    border: 1px dashed #1A73E8;
    background: #FFF;
    color: var(--pure-black, #000);
    padding: 12px 16px;
    font-weight: 400;
    font-size: 16px;
    font-family: Poppins;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    p {
        color: #1A73E8;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`;

const Label = styled.p`
    color: #666;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 8px;
`;

export default SingleImageUpload;
