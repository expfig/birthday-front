/**
 * IMPORTS
 */
import styled from "styled-components";

interface IContainerProps {
  data_aniver: boolean;
}
const Container = styled.div<IContainerProps>`
  width: 340px;
  height: 120px;
  display: flex;
  -moz-box-align: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  text-align: left;
  background-color: rgb(255, 255, 255);

  border: ${({ data_aniver }) => (data_aniver ? "2px solid #00c06b" : "none")};
`;

const WrapperButton = styled.div`
  width: 80px;
`;
interface IButtonProps {
  data_aniver: boolean;
}
const Button = styled.button<IButtonProps>`
  margin-top: 2px;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background-color: ${({ data_aniver }) =>
    data_aniver ? "#00c06b" : "#051c3b"};
  border: ${({ data_aniver }) =>
    data_aniver ? "2px solid #00c06b" : "#051c3b"};
  border-radius: 8px;
  outline: none;
`;
const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleButton = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

const TitleDescription = styled.strong`
  color: rgb(186, 186, 186);
  font-size: 18px;
  font-weight: 600;
  margin-top: 4px;
`;

const Title = styled.p`
  color: #2f3336;
  font-size: 17px;
  font-weight: bold;
`;

/**
 * EXPORT
 */
export {
  Container,
  Title,
  WrapperButton,
  Button,
  WrapperText,
  TitleButton,
  TitleDescription,
};
