import React, { MouseEventHandler, useContext, useState } from 'react'
import { Card } from '../../components/card'
import { Box, Center, Input } from '@chakra-ui/react'
import { MyButon } from '../../components/Buton'
import { login } from '../../services/login'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const Home = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')

  const { setlsLogedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const handleValidation = async (userEmail: string) => {
    const loggedIn = await login(userEmail)
    if (!loggedIn){
      alert('Email inválido')
    }else{
      setlsLogedIn(true)
      navigate(`/conta/1`)
    }
  }

  return (
    <Card>
      <Box backgroundColor='#fff' borderRadius='25px' padding='15px'>

        {/* {userData === null || userData === undefined || Object.keys(userData).length === 0 ? <h1>Loading...</h1> :
      <h1> Informações carregadas</h1>
    } */}
        <Center>
          <h1>Faça o Login</h1>
        </Center>
        <Input placeholder='Insira o email' onChange={(event) => setEmail(event.target.value)} type="email" />
        <Input placeholder='Insira a senha' onChange={(event) => setPassword(event.target.value)} type='password' />
        <Center>
          <MyButon onClick={() => handleValidation(email)} title='Button' />
        </Center>
      </Box>
    </Card>
  )
}

export default Home
