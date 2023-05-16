import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    padding: 35px;
    background: #4287f5;
    color: #fff;
    font-family: sans-serif;
  
`;

export const Links = styled.div`
    color: red;
    a{
        margin-left: 18px;
        padding: 8px;
        text-decoration: none;
        color: #000;
        border: 1px solid #000;
        border-radius: 12px;
                
        transition: all ease 0.2s;
    }
    a:hover{
        background: #2ad186;
        color: #fff;
    }
`;