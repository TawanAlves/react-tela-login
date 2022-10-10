import styled from 'styled-components';

export const Container = styled.div`
  width: 406px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(158.54deg, #151515 16.54%, #4f5c70 93.45%);
  border-radius: 10px;
`;

export const P  = styled.p`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 20px;
   color: #fff;
   max-width: 364px;
`;

export const Pi  = styled.p`
   font-family: "Montserrat";
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 20px;
   color: #fff;
   margin-bottom: 5px;
`;

export const Input = styled.input`
   margin-bottom: 20px;
   background-color: transparent;
   border: 1px solid #E7F2FB;
   border-radius: 5px;
   width: 340px;
   height: 35px;
   color: #fff;
   padding-left: 12px;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 20px;
`;

export const Bt = styled.button`
  margin: 193px 0 0 0;
   border-radius: 5px;
   width: 360px;
   height: 45px;
   background-color: #fff;
   font-family: 'Lexend';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 20px;
   color: #2C2C2C;
   border: none;
   cursor: pointer;
`;

export const Link = styled.a`
   margin-top: 3px; 
    color: #fff;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;   
`;
