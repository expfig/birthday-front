/**
 * IMPORTS
 */
import React from "react";

// styles
import {
  Button,
  Container,
  Title,
  TitleButton,
  TitleDescription,
  WrapperButton,
  WrapperText,
} from "./styles";
import { format } from "date-fns";

type IUserProps = {
  nome: string;
  date:string;
  descricao: string;

};

interface IUserCardInfo {
  infoUser: IUserProps;
  dataAniver: any
}
const UserCardInfo = ({infoUser, dataAniver}: IUserCardInfo) => {
const teste = infoUser.date.slice(5, 16);
console.log("test", teste === dataAniver);

  return (
    <>
      <Container data_aniver={teste === dataAniver}>
        <WrapperButton>
          <Button
            data_aniver={teste === dataAniver}
          >
            <TitleButton>{infoUser.date.slice(8, 11)}</TitleButton>
          </Button>
        </WrapperButton>

        <WrapperText>
          <Title>{infoUser.nome}</Title>

          <TitleDescription>{infoUser.descricao === "" || infoUser.descricao === undefined ? "Sem informação":infoUser.descricao }</TitleDescription>
        </WrapperText>
      </Container>
    </>
  );
};

/**
 * EXPORT
 */
export { UserCardInfo };
