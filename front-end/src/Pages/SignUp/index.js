import React, { useState } from 'react';
import axios from 'axios';
import { Container, SelectContainer, SelectLabelButton, DropdownStyle, DropdownItem } from './styles';
import Header from '../../Components/Header/index'
function SignUp() {
  const [file, setFile] = useState('');

  const [data, getFile] = useState([]);
  const [keys, setKeys] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [desconto, setDesconto] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleValueChange = (value) => {
    setCurrentValue(value);
  };
  const handleChangeSelect = (value) => {
    handleValueChange(value);
    // call method, if it exists
    console.log(value);
    // close, after all tasks are finished
    handleClose();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  const uploadFile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('desconto', desconto);
    formData.append('markets', markets);

    axios.post('http://localhost:5423/users', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      getFile(res.data)
      setKeys(Object.keys(res.data[0]))
    }).catch(err => {
      console.log(err)
    })
  }

  

  return (
    <>
      <Header />
      <Container>
        <div className="file-upload">
          <input type="file" onChange={handleChange} />
          <button type="button" className='upload' onClick={uploadFile} >Upload</button>
          <br />
          <h3 style={{ marginLeft: '10%', marginBottom: '2%' }}>Selecione os marketplaces desejados: {markets.length > 0 && markets.toString()}</h3>
          <div className="btns">
            <button className='magalu' type="button" onClick={() => { setMarkets([...markets, 'magalu']) }} >Magalu</button>
            <button className='magalu' type="button" onClick={() => { setMarkets([...markets, 'shopee']) }} >Shopee</button>
          </div>

          <br />
          <br />
          <br />
          <br />


          {
            markets.filter(e => e == 'magalu').length > 0 ? (
              <div className="btns">
                <button type="button" className='magalu' onClick={() => { setDesconto(0) }} >vermelho</button>
                <button type="button" className='magalu' onClick={() => { setDesconto(25) }} >amarelo</button>
                <button type="button" className='magalu' onClick={() => { setDesconto(50) }} >verde</button>
                <button type="button" className='magalu' onClick={() => { setDesconto(75) }} >full</button>
              </div>
            ) : (
              <></>
            )
          }


          {data.length > 0 ? (
            <>
              <table style={{ width: '90%', marginLeft: '5%' }}>
                <tr>
                  {keys.map((item) => {
                    return (
                      <>
                        <th>{item}</th>
                      </>
                    )
                  })}

                </tr>
                {data.length > 0 ? data.map(item => {
                  return (

                    <tr>
                      {
                        keys.map((e, index) => {
                          return (
                            <>
                              <th>{item[keys[index]]}</th>
                            </>
                          )
                        })
                      }
                    </tr>
                  )
                }) : null}
              </table>
              <button type="button" onClick={uploadFile} >Baixar arquivo excel</button>
            </>
          ) : (<></>)}

        </div>
      </Container>
    </>
  );
}

export default SignUp;