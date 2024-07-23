import { Center, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import CardInfo from '../../components/CardInfo';
import { api } from '../../api';
import { IUserData } from '../../components/card/type';
import { AppContext } from '../../context/AppContext';

const Cont = () => {

  const [userData, setUserData] = useState<null | IUserData>({} as IUserData)

  const actualData = new Date()

  const { id } = useParams()
  const navigate = useNavigate()
  const {islogedIn} = useContext(AppContext)

  if (userData && id !== userData.id) {
    navigate('/')
  }
  !islogedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api
      if (data) setUserData(data)
    }
    getData()
  }, [])
  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {
          userData === null || userData === undefined || Object.keys(userData).length === 0 ?
            (
              <Center>
                <Spinner size='xl' color="#fff" />
              </Center>
            ) :
            (
              <>
                <CardInfo mainContent={`Bem vindo(a) ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} : ${actualData.getHours()}:${actualData.getMinutes()}`} />
                <CardInfo mainContent='Saldo' content={`R$${userData.balance}`} />
              </>
            )
        }
      </SimpleGrid>
    </Center>
  );
}
export default Cont