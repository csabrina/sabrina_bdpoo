let db = require('./db');
let Ingredientes = require('./model/Ingredientes');

async function sincronizar(){
    await db.sync();
}
//sincronizar();

async function inserir (obj){
    let res = await Ingredientes.create(obj);
    console.log(res);
}

/*let list = [];

let i1 = {nome: 'Calabresa', quantidade: '5'};
let i2 = {nome: 'Cheddar', quantidade: '4'};
let i3 = {nome: 'Tomate', quantidade: '100'};
let i4 = {nome: 'Cebola', quantidade: '1'};
let i5 = {nome: 'Farinha de Trigo', quantidade: '10'};

list.push(i1, i2, i3, i4, i5);

for(l of list){
  inserir(l);
}*/

async function consultar (){
    let resul = await Ingredientes.findAll();
    console.log(resul);
}
consultar();