import styled from 'styled-components';

export const Container = styled.div`
    background: #fafafa;
    display: flex;
    row-direction: row;
    min-height: 100vh;
    
    
`;

export const Buscar = styled.div`
form{
        
    max-width: 800px;
    padding: 50px;
    margin-left: 10%;
    background: #fff;
    border-radius: 12px;
    margin-top: 25px;
    width: 800px;
}
input{
    width: 80%;
    padding: 8px;
    margin: 12px;
    margin-left: 10%;
    border: none;
    border-bottom: 1px solid #000;
}
button{
    margin-top: 35px;
    width: 80%;
    margin-left: 10%;
    height: 38px;
    border: none;
    transition: all ease 0.4s;
    background: #2bf097;
    margin-bottom: 48px;
    border-radiu: 12px;
}

button:hover{
    background: #2ad186;
    border: 1px solid #000;
}
`;

export const User = styled.div`
    display: flex;
    row-direction: row;
    padding: 6%;
    h3{
        padding-left: 12px;
        padding-right:12px;
    }
    p{
        cursor: pointer;
        padding-left: 8px;
        padding-right: 8px;
    }
`;
export const Main = styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 25px;
    margin-left: 5%;
    margin-top: 25px;
    height: 100%;
`;


export const Pesquisa = styled.div`
    display: flex;
    row-direction: row;
    padding: 15px;
   
    h3{
        padding-left: 12px;
    }

    hr{
        margin-left: 12px;
    }
`;

