import React from 'react'
import axios from  'axios';
import { Form, Input } from '@rocketseat/unform'
import Header from '../../Components/Header/index'
import { Container, Main } from './styles'

import { useHistory } from 'react-router-dom'

function SignUp() {
  const history = useHistory();
  async function handleSubmit(data) {
    const api = axios.create({
        baseURL: 'http://localhost:8080',
      });
      
       await api.post('users', data)
       history.push("/")
        
}
  return (
    <>
      <Container >
        <Header />
        <Main>
          <Form onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Nome"/>
                <Input type="text" name="name_animal" placeholder="Nome do animal"/>
                <Input type="text" name="raca" placeholder="Raça do animal"/>
                <button type="submit">enviar</button>
                
            </Form>
        </Main>
      </Container>
    </>
  );
}

export default SignUp;
