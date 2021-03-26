import React, { useState } from 'react'
import axios from 'axios';
import { Form, Input } from '@rocketseat/unform'
import Header from '../../Components/Header/index'
import { Container } from './styles'
import { CSVLink } from "react-csv";
import { useHistory } from 'react-router-dom'

function Relatorio() {
  const [retorno, setRetorno] = useState([])
  const history = useHistory();
  async function handleSubmit(data) {
    const api = axios.create({
      baseURL: 'http://localhost:8080',
    });

    const retorno = await api.get('relatorios', { params: data })

    setRetorno(retorno.data);
    alert('Relatorio pronto para download')
  }
  return (
    <>
      <Container>
        <Header />
        <Form onSubmit={handleSubmit} >
          <p>Data inicial</p>
          <Input type="date" name="inicio" />
          <p>Data final</p>
          <Input type="date" name="final" />
          <button type="submit">Gerar relatorio</button><br />
          <CSVLink data={retorno} separator={";"} filename={"Ralatorio-dog-and-peoples.csv"}>
            Download relatorio
          </CSVLink>
        </Form>
      </Container>
    </>
  );
}

export default Relatorio;
