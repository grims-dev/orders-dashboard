import styled from "styled-components";

interface BtnProps {
  color?: string;
}

const Button = styled.button<BtnProps>`
  display: block;
  border: 0;
  cursor: pointer;
  transition: all 0.25s ease-out;
  padding: 12px 18px;
  margin: 12px 0px 12px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: ${(props) => (props.color ? props.color : "#3498db")};
  border-radius: 4px;
`;

export default Button;
