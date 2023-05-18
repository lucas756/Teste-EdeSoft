import React, { useState } from 'react';
import axios from 'axios';
import { Container, SelectContainer, SelectLabelButton, DropdownStyle, DropdownItem } from './styles';
import Header from '../../Components/Header/index'
function SignUp() {
  const [file, setFile] = useState('');

  const [data, getFile] = useState([]);
  const [keys, setKeys] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [descontoMagalu, setDescontoMagalu] = useState('');
  const [descontoVia, setDescontoVia] = useState('');
  const [descontoAmericanas, setDescontoAmericanas] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  const uploadFile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('descontoMagalu', descontoMagalu);
    formData.append('descontoVia', descontoVia);
    formData.append('descontoAmericanas', descontoAmericanas);
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
            <button className='magalu' type="button" onClick={() => { setMarkets([...markets, 'amazon']) }} >Amazon</button>
            <button className='magalu' type="button" onClick={() => { setMarkets([...markets, 'americanas']) }} >Americanas</button>
            <button className='magalu' type="button" onClick={() => { setMarkets([...markets, 'via']) }} >Via Varejo</button>
            <button className='magalu' type="button" onClick={() => { setMarkets([...markets, 'meli']) }} >Mercado Livre</button>
          </div>

          <br />
          <br />
          <br />
          <br />


          {
            markets.filter(e => e == 'magalu').length > 0 ? (
              <div className="btns">
                <button type="button" className='magalu' onClick={() => { setDescontoMagalu(0) }} >vermelho</button>
                <button type="button" className='magalu' onClick={() => { setDescontoMagalu(25) }} >amarelo</button>
                <button type="button" className='magalu' onClick={() => { setDescontoMagalu(50) }} >verde</button>
                <button type="button" className='magalu' onClick={() => { setDescontoMagalu(75) }} >full</button>
              </div>
            ) : (
              <></>
            )
          }

          {
            markets.filter(e => e == 'via').length > 0 ? (
              <div className="btns">
                <button type="button" className='magalu' onClick={() => { setDescontoVia(0) }} >Nota até 3,9</button>
                <button type="button" className='magalu' onClick={() => { setDescontoVia(25) }} >Nota de 4 até 4,9</button>
                <button type="button" className='magalu' onClick={() => { setDescontoVia(50) }} >Nota 5</button>
                <button type="button" className='magalu' onClick={() => { setDescontoVia(75) }} >full</button>
              </div>
            ) : (
              <></>
            )
          }

          {
            markets.filter(e => e == 'americanas').length > 0 ? (
              <div className="btns">
                <button type="button" className='magalu' onClick={() => { setDescontoAmericanas(0) }} >0 a 119 pontos</button>
                <button type="button" className='magalu' onClick={() => { setDescontoAmericanas(40) }} >120 a 149 pontos</button>
                <button type="button" className='magalu' onClick={() => { setDescontoAmericanas(50) }} >150 pontos</button>
                <button type="button" className='magalu' onClick={() => { setDescontoAmericanas(100) }} >full</button>
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