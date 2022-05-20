//servidor creado con NODE
// const http = require('http');

// const server = http.createServer((/*req,*/ res =>{
//     res.status = 200;
//     res.setHeader('Content-type', 'text/palin');
//     res.end('hello world');
// }));

// server.listen(3000, () => {
//     console.log('Serve on port 3000');
// });

//CREACION DEL SERVIDOR CON EXPRESS

const express = require("express");
const app = express(); //permite ejecutar el modulo express, devuelve un modulo en formato json

app.use(express.json()); //hace que express pueda entender objetos json

//all crea una ruta, en la cual todos los /user, pasan primero por el all.
//para que continue se debe agregar el parámetro next
app.all("/user", (req, res, next) => {
  console.log("paso");
  next();
});

app.get("/user", (req, res) => {
  //permite responder a las peticiones (ruta)
  res.json({
    //devuelve un objeto js
    username: "Cameron",
    lastname: "How",
  });
});

app.post("/user/:id", (req, res) => {
  //crea la ruta /about, se pueden crear tantas rutas como se quiera
  console.log(req.body);
  console.log(req.params);
  res.send("Peticion POST");
});

app.put("/contact", (req, res) => {
  res.send("Peticion PUT");
});

app.delete("/test", (req, res) => {
  res.send("Peticion DELETE");
});

app.listen(5000, () => {
  console.log("Server on port 5000");
});
