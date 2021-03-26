import styled from 'styled-components';

export const Container = styled.div`
    background: #fafafa;
    height: 100vh;
    margin-top: 0;
`;

export const Main = styled.div`
form{
        
    max-width: 1000px;
    padding: 50px;
    margin-left: 50%;
    background: #fff;
    border-radius: 12px;
    margin-top: 25px;
    transform: translate(-50%);
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
    margin-top: 85px;
    width: 80%;
    margin-left: 10%;
    height: 38px;
    border: none;
    transition: all ease 0.4s;
    background: #2bf097

}

button:hover{
    background: #2ad186;
    border: 1px solid #000;
}
`;