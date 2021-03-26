import React from 'react'

import { Link } from 'react-router-dom'

import { Container, Links } from './styles'

function Header() {
  return (
    <>
      <Container >
        <h1>Dog and peoples</h1>

        <Links>
            <Link to="/">Home</Link>
            <Link to="/sign-up">Cadastre-se</Link>
            <Link to="/relatorio">Relatorio</Link>
        </Links>
      </Container>
    </>
  );
}

export default Header;
