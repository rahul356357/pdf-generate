const a = require('order-id')('test');
const fs = require('fs');
const b = require('./book');
const r = require('./index.html')
const fns = require('date-fns');
const pdf = require('html-pdf-node');
const DateGenerator = require('random-date-generator');

let startDate = new Date(2020, 3, 4);
let endDate = new Date(2020, 12, 12);
let  k = b;
let totalPrice = k.reduce((sum,nxt)=>{
    let m =   new RegExp(/[0-9]/g);
    console.log(m.match(nxt));
//    let num = Number(nxt.match(m).join(''))

//    console.log(num)
},'0')
// k.map((b, i) => {
//     let ord = a.generate()
//     let date = DateGenerator.getRandomDateInRange(startDate, endDate);
//     let addedDate = fns.addDays(date, 3);
//     let format = fns.format(date, 'dd MMMM yyyy');
//     let f2 = fns.format(addedDate, 'dd MMMM yyyy');
//     let html = r(ord, format, f2, b.name, b.price)
//     // fs.writeFileSync(`${i}.html`, html);
//     return html
   
// }).map((r,i)=>{
//      pdf.generatePdf({content:r},{
//         format:'A4',
//         args: ['--no-sandbox'],
//         path:`${i}.pdf`
//     },(r)=>{
//         console.log(r)
//         console.log('generated')
//     });
// })
// console.log(b);
