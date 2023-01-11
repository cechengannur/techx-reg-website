import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

import TharangImg from "../../assets/images/logo/tharang.png";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  @media (max-width: 768px) {
  
  font-size:16px;
}
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #FB2576;
  color: #FFF;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  @media (max-width: 768px) {
  margin-left:1em;
  padding: 15px 21px;
}

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #FB2576;
  }
`;

const NikeLogo = styled.div`
  margin-top:3em;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
  
  
}
  img {
    width: auto;
    height: 43px;

    @media (max-width: 768px) {
  
      height: 23px;
  }
  }
`;

export function ShoesDetails(props) {
  return (
    <DetailsContainer>
      <SmallText>IHRD THARANG</SmallText>
      <SpacedHorizontalContainer>
        <MediumText>Tharangify Universe Edition</MediumText>
        <MediumText>₹300</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <MediumText>Warp through space and time, the all new Tharang T-Shirt</MediumText>
        <BuyButton onClick={()=>{
                                    window.open(`${props.link}`, '_blank');
                                }}>BUY</BuyButton>
      </SpacedHorizontalContainer>
      <NikeLogo>
        <img src={TharangImg} />
      </NikeLogo>
    </DetailsContainer>
  );
}
