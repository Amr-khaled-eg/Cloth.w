import styled from "styled-components";
import { Button } from "../Button.styles";
export const ImgContainer = styled.div`
  aspect-ratio: 1/0.6;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  opacity: 0.9;
  transform: translateY(50px);
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  padding: 0 2rem;
`;
export const FeatuersImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
export const FeaturesText = styled.p`
  color: #ffffff;
  margin: 2rem 0;
  @media screen and (max-width: 750px) {
    margin: 1rem 0;
    font-size: 0.7rem;
  } ;
`;
export const FeaturesTallImgsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const OpacityHeader = styled.h1`
  opacity: 0.7;
  font-size: 2.5rem;
  color: #ffffff;
`;
export const FeaturesTallImgContainer = styled.div`
  width: 45%;
  aspect-ratio: 0.5/0.7;
  position: relative;
  padding-bottom: 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const FeaturesButton = styled(Button)`
  background-color: #ffffff;
  color: #000000;
`;
