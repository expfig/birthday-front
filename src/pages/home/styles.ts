/**
 * IMPORTS
 */
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WrapperContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WrapperLoading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;
const Title = styled.h1`
  color: #2f3336;
  font-weight: 600;
`;
const SubHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: #33a1f2;
  }
`;
interface ISubTitleHeaderProps {
  actualMonth: boolean;
}
const SubTitleHeader = styled.p<ISubTitleHeaderProps>`
  color: ${({ actualMonth }) => (actualMonth ? "#33a1f2" : "#2F3336")};
  text-decoration: ${({ actualMonth }) =>
    actualMonth ? "underline" : "normal"};
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;
  margin-left: 16px;
`;
const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px 32px;
`;

/**
 * EXPORT
 */
export {
  Container,
  WrapperContent,
  WrapperLoading,
  Header,
  SubHeader,
  SubTitleHeader,
  Title,
  Section,
};
