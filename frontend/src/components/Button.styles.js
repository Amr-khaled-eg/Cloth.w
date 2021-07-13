import styled from "styled-components";
export const Button = styled.button`
  padding: 1rem 3rem;
  font-size: 1rem;
  border-radius: 3px;
  font-weight: 600;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 750px) {
    padding: 0.7rem 2rem;
    font-size: 0.8rem;
  }
`;
