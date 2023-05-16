import styled, { css } from 'styled-components';

export const Container = styled.div`
    background: #fafafa;
    height: 100vh;
    margin-top: 0;
    padding: 15px;
    form{
        padding: 2%;
        
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
    .upload{
        margin-top: 35px;
        width: 80%;
        margin-left: 10%;
        height: 38px;
        border: none;
        transition: all ease 0.4s;
        background: #4287f5;
        margin-bottom: 48px;
        border-radiu: 12px;
        color: #fff;
        font-weight: 800;
    }

    .magalu{
        width: 10%;
        height: 38px;
        border: none;
        transition: all ease 0.4s;
        background: #4287f5;
        margin-bottom: 48px;
        border-radiu: 12px;
        color: #fff;
        font-weight: 800;
    }

    .btns{
        display: flex;
        justify-content: space-around;
    }
    
    button:hover{
        background: #3872cf;
    }
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


export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
  
`;

export const SelectLabelButton = styled.button`
  padding: 0.3rem 0.5rem;
  min-width: 20rem;
  font-size: 3rem;
  font-weight: 500;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: #111;
  align-items: center;
  justify-content: space-between;
  border: 1px solid slategrey;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 #ccc;
  transition: 0.3s ease;
  &:hover {
    background-color: #eee;
  }
`;

export const DropdownStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 40vmax;
  min-width: 10rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fafafa;
  border: 1.5px solid slategrey;
  transition: max-height 0.2s ease;
  overflow: scroll;
  ${(p) =>
    p.isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
`;

export const DropdownItem = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: #333;
  border-radius: 0.3rem;
  cursor: pointer;
  ${(p) =>
    p.active &&
    css`
      color: #166edc;
      font-weight: 500;
    `}
  &:hover, :focus, :focus:hover {
    background-color: #166edc;
    color: #fafafa;
    outline: none;
  }
`;