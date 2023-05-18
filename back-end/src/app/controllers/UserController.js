import Magalu from '../models/Magalu.js';
import * as Yup from 'yup';
import csv from 'csvtojson'
import path from 'path'
import { Op } from 'sequelize';
import Markets from '../models/Markets.js';
import Vias from '../models/Via.js';
import Americanas from '../models/Americanas.js';
import Categoria from '../models/Categoria.js';


const numberToReal = (numero) => {
  var numero = numero.toFixed(2).split('.');
  numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}
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



    csv()
      .fromFile(csvFilePath)
      .then(async (jsonObj) => {
        for (const item of jsonObj) {
          if (item['valor base']) {
            if (item['comprimento'] && item['largura'] && item['altura']) {
              item.cubagem = (item['comprimento'] * item['largura'] * item['altura'] / 6000).toFixed(2)
              item.cubagem = 0.3
              let arrayMarkets = req.body.markets.split(',')

              if (arrayMarkets.filter(e => e == 'magalu').length > 0) {
                const infosMagalu = await Magalu.findOne({ where: { [Op.and]: [{ peso_final: { [Op.gt]: item.cubagem } }, { peso_inicial: { [Op.lte]: item.cubagem } }] } });
                const infosMarketMagalu = await Categoria.findOne({ where: { name: item.categoria } })
                item.magalu = numberToReal(Number(item['valor base']) + (Number(item['valor base']) * (Number(infosMarketMagalu.com_magalu) / 100)) + (infosMagalu.value - (infosMagalu.value * (req.body.descontoMagalu / 100))))
              }

              if (arrayMarkets.filter(e => e == 'shopee').length > 0) {
                const infosMarketShopee = await Markets.findOne({ where: { name: "shopee" } })
                item.shopee = numberToReal(Number(item['valor base']) + (Number(item['valor base']) * (infosMarketShopee.porcentagem / 100)))
              }

              if (arrayMarkets.filter(e => e == 'americanas').length > 0) {
                const infosAmericanas = await Americanas.findOne({ where: { [Op.and]: [{ peso_final: { [Op.gt]: item.cubagem } }, { peso_inicial: { [Op.lte]: item.cubagem } }] } });
                const infosMarketAmericanas = await Categoria.findOne({ where: { name: item.categoria } })
                if (Number(item['valor base']) < 80) {
                  infosAmericanas.value = '12.90'
                  if (req.body.descontoAmericanas == 100) {
                    req.body.descontoAmericanas = 60
                  }
                }

                item.americanas = numberToReal(Number(item['valor base']) + (Number(item['valor base']) * (Number(infosMarketAmericanas.com_americanas) / 100)) + (infosAmericanas.value - (infosAmericanas.value * (req.body.descontoAmericanas / 100))))
              }

              if (arrayMarkets.filter(e => e == 'via').length > 0) {
                const infosVia = await Vias.findOne({ where: { [Op.and]: [{ peso_final: { [Op.gt]: item.cubagem } }, { peso_inicial: { [Op.lte]: item.cubagem } }] } });
                const infosMarketVia = await Markets.findOne({ where: { name: "via" } })
                item.via_varejo = numberToReal(Number(item['valor base']) + (Number(item['valor base']) * (Number(infosMarketVia.porcentagem) / 100)) + (infosVia.value - (infosVia.value * (req.body.descontoVia / 100))))
              }

              if (arrayMarkets.filter(e => e == 'meli').length > 0) {
                const infosMarketShopee = await Markets.findOne({ where: { name: "meli" } })
                item.mercado_livre = numberToReal(Number(item['valor base']) + (Number(item['valor base']) * (infosMarketShopee.porcentagem / 100)))
              }


              if (arrayMarkets.filter(e => e == 'amazon').length > 0) {
                const infosMarketShopee = await Markets.findOne({ where: { name: "amazon" } })
                item.amazon = numberToReal(Number(item['valor base']) + (Number(item['valor base']) * (infosMarketShopee.porcentagem / 100)))
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