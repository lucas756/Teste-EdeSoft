import Magalu from '../models/Magalu.js';
import * as Yup from 'yup';
import csv from 'csvtojson'
import path from 'path'
import { Op } from 'sequelize';
import Markets from '../models/Markets.js';

class UserController {
  async store(req, res) {
    if (!req.files) {
      return res.status(500).send({ msg: "file is not found" })
    }
    const myFile = req.files.file
    myFile.mv(`${path.join(__dirname, '../../')}/${myFile.name}`, function (err) {
      if (err) {
        console.log(err)
        return res.status(500).send({ msg: "Error occured" });
      }
    });
    const csvFilePath = `${path.join(__dirname, '../../')}${myFile.name}`;

    const numberToReal = (numero) => {
      var numero = numero.toFixed(2).split('.');
      numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
      return numero.join(',');
    }

    csv()
      .fromFile(csvFilePath)
      .then(async (jsonObj) => {
        for (const item of jsonObj) {
          if (item['valor base']) {
            if (item['comprimento'] && item['largura'] && item['altura']) {
              item.cubagem = (item['comprimento'] * item['largura'] * item['altura'] / 6000).toFixed(2)
              item.cubagem = 0.3
              let testee = req.body.markets.split(',')
              if (testee.filter(e => e == 'magalu').length > 0) {
                const teste = await Magalu.findOne({ where: { [Op.and]: [{ peso_final: { [Op.gt]: item.cubagem } }, { peso_inicial: { [Op.lte]: item.cubagem } }] } });
                const ooi = await Markets.findOne({ where: { name: "magalu" } })
                item.magalu = numberToReal(Number(item['valor base']) + (Number(item['valor base']) * (Number(ooi.porcentagem) / 100)) + (teste.value - (teste.value * (req.body.desconto / 100))))
              }

              if (testee.filter(e => e == 'shopee').length > 0) {
                const ooi = await Markets.findOne({ where: { name: "shopee" } })
                item.shopee = numberToReal(Number(item['valor base']) + (Number(item['valor base']) * (ooi.porcentagem / 100)))
              }

            }


          }
        }

        return res.json(jsonObj)
      }).catch(err => {
        console.log(err)
      })
  }

}

export default new UserController();