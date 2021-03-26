import styled from 'styled-components';

export const Container = styled.div`
    background: #fafafa;
    min-height: 100vh;
    height: 100%;
    form{
        
        max-width: 800px;
        padding: 50px;
        margin-left: 50%;
        background: #fff;
        border-radius: 12px;
        margin-top: 25px;
        width: 800px;
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
    p{
        margin-left: 10%;
        padding: 5px;
        color: #cdcdcd;
    }
`;