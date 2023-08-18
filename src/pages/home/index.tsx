/**
 * IMPORTS
 */
import { useCallback, useEffect, useState } from "react";
import { format, getMonth } from "date-fns";
// typings

import axios from "axios";

// components
import { UserCardInfo } from "../../components/user-card-info";

// styles
import {
  Container,
  Header,
  Section,
  SubHeader,
  SubTitleHeader,
  Title,
} from "./styles";

type IUserProps = {
  nome: string;
  date: string;
  descricao: string;

};
const Home = () => {
  const [month, setMonth] = useState("");
  const [userDataAnniversaries, setUserDataAnniversaries] = useState<IUserProps[]>([]);
  const [dia_do_aniversariante, setAniversariante] = useState("");
  const day = format(new Date(), 'yyyy-MM-dd');

  const[isLoading,setLoading] = useState(true);

  const datas = [
    { name: "Janeiro", numberMonth: "01" },
    { name: "Fevereiro", numberMonth: "02" },
    { name: "Março", numberMonth: "03" },
    { name: "Abril", numberMonth: "04" },
    { name: "Maio", numberMonth: "05" },
    { name: "Junho", numberMonth: "06" },
    { name: "Julho", numberMonth: "07" },
    { name: "Agosto", numberMonth: "08" },
    { name: "Setembro", numberMonth: "09" },
    { name: "Outubro", numberMonth: "10" },
    { name: "Novembro", numberMonth: "11" },
    { name: "Dezembro", numberMonth: "12" },
  ];


  const handleDate = useCallback(async (month: string) => {
    try {
    setLoading(true);
    const responseApiUsers = await axios.get<IUserProps[]>(`http://localhost:3434/${month}`);
    if(responseApiUsers.data){
      setUserDataAnniversaries(responseApiUsers.data);
      setMonth(month);
    }
    } catch (error) {
      //TRATAMENTO DE ERROR
    }finally{
       setLoading(false);
    }
  }, [])

  
  useEffect(() => {
    const month = String(`0${getMonth(new Date()) + 1}`);

    if (month) {
      handleDate(month);
      setAniversariante(day.slice(5, 18))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <>
  {isLoading ? (
     <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <p>carregando..</p>
     </div>
  ) : (
   <Container>
   <Header>
     <Title>🎉 Aniversariantes do mês 🥂</Title>
   </Header>
   
   <SubHeader>
     {datas.map((date) => (
       <SubTitleHeader
        onClick={()=> handleDate(date.numberMonth)}
         actualMonth={date.numberMonth === month}
         key={date.numberMonth}
       >
         {date.name}
       </SubTitleHeader>
     ))}
   </SubHeader>
   
   <Section>
    {userDataAnniversaries.map((user)=> (
      <UserCardInfo dataAniver={dia_do_aniversariante} infoUser={user} />
    ))}
   </Section>
   </Container>
  )}
  

  </>
  );
};


/**
 * EXPORT
 */
export { Home };
