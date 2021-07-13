import styled from "styled-components";
import { FeatuersImg } from "../features/features.styles";
import { Link } from "react-router-dom";

export const ProductContainer = styled(Link)`
  width: 100%;
  max-width: 400px;
`;
export const ProductImgsContainer = styled.div`
  width: 100%;
  aspect-ratio: 0.5/0.75;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
`;
export const ProductImg1 = styled(FeatuersImg)`
  transition: opacity 0.4s ease-in-out;
  ${ProductImgsContainer}:hover & {
    opacity: 1;
  }
`;
export const ProductImg2 = styled(FeatuersImg)`
  transition: opacity 0.4s ease-in-out;
  ${ProductImgsContainer}:hover & {
    opacity: 0;
  }
`;
export const ProductName = styled.h3`
  font-size: 1.5rem;
`;
export const ProductDescription = styled.p`
  color: #676767;
  font-size: 1rem;
  margin: 0.5rem 0;
  width: 100%;
`;
export const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;
