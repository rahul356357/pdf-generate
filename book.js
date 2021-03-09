let books = [];
let getObj = (name,price)=>({
  name:name,
  price:price
})
books.push(getObj('Rust Web Programming: A hands-on guide to developing fast and secure web apps with the Rust programming language','6,269.00'));
books.push(getObj('Meteor: Full-Stack Web Application Development ','5,699.00'));
books.push(getObj('React: Building Modern Web Applications ', '4,186.34'));
books.push(getObj('Node.Js Web Development: Server-side development with Node 10 made easy, 4th Edition','3,039.00'));
books.push(getObj('Hands-On Microservices with Node.js: Build, test, and deploy robust microservices in JavaScript','2,979.00'));
books.push(getObj('Mastering Typoscript: Typo3 Website, Template, and Extension Development','4,084.00'))
books.push(getObj('React Design Patterns and Best Practices: Build easy to scale modular applications using the most powerful components and design patterns ','3,039.00'));

module.exports =  books;