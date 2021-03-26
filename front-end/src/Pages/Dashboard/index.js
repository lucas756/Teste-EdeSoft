import React, { useEffect, useState } from 'react'
import { Form, Input } from '@rocketseat/unform'
import axios from  'axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Header from '../../Components/Header'


import { Main, Container, Buscar, User, Pesquisa } from './styles'
import { Button } from '@material-ui/core';
 
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Dashboard() {
    const [item, setItem] = useState([]);
    const [cachorro, setCachorro] = useState([]);
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    useEffect(() => {
      async function loadPosts() {
        const api = axios.create({
          baseURL: 'http://localhost:8080',
        });
        
        const response = await api.get('users');
        
        setItem(response.data);
      }
      
        loadPosts();
    },[]);
    async function loadCachorros(data) {
        const api = axios.create({
            baseURL: 'http://localhost:8080',
          });
          
          const busca = await api.get('animais', {params: data});
          console.log(busca.data.length)

            if(busca.data.length === 0){
              alert('nenhum cachorro dessa raça foi encontrada')
              window.location.reload();
              return
            }
            setCachorro(busca.data);
     
          
      }
    async function updateUser(data){
        const api = axios.create({
            baseURL: 'http://localhost:8080',
          });
          
           await api.put(`users/${data.id}`, data);
           window.location.reload();
    }
    async function deleteUser(id){
        const api = axios.create({
            baseURL: 'http://localhost:8080',
          });
          
           await api.delete(`users/${id}`);
           window.location.reload();
    }
  return (
      <>
      <Header />
      <Container>
        
          <Main>

            <h2>Usuarios cadastrados:</h2>
            {
                item.map(items => (
                  <>
                  <User key={items.id}>
                    <p> {items.id}</p>
                    <h3 > {items.name}</h3>
                      <p onClick={() => deleteUser(items.id)}>excluir</p>
                      <hr />
                      <p onClick={() => handleOpen()}>editar</p>
                    </User>
                    <hr />
                    </>
              ))
            }
          </Main>
        <Buscar>
          <Form onSubmit={loadCachorros}>
              <Input type="text" name="raca" placeholder="Buscar cães por raça"/>
              <button type="submit">Bucar</button>
              <h2>Resultados da sua Pesquisa:</h2>
              {
                cachorro.map(items => (
                  <>
                  
                  <hr />
                  <Pesquisa>
                      <p> {items.id}</p>
                      <h3> {items.name_animal}</h3>
                      <hr />
                      <h3>{items.raca_animal}</h3>
                  </Pesquisa>
                  
                  </>
                )) 
              }
          </Form>
          
        </Buscar>
       
   
        
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Editar usuario</h2>
          <Form onSubmit={updateUser}>
            <p>Novo nome do usuario</p>
              <Input type="text" name="name" />
              <br />
              <br />
            <p>Id Usuario</p>
              <Input type="number" name="id" />
              <br />
              <br />
              <button type="submit">Editar</button>
          </Form>
          </div>
      </Modal>
      </Container>
      </>
  );
}

export default Dashboard;
 