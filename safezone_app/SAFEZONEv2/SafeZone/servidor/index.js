const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mysql =  require("mysql");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.json());

app.use(
    cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    })
);
app.use(cookieParser());


const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"AppSafeZone",
    database:"safezone",
});

app.post("/registro", (req, res) => {

    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const Email = req.body.Email;
    const Contraseña = req.body.contraseña;

    db.query(
        "INSERT INTO usuarios (Nombre, Apellido, Email, contraseña) VALUES (?, ?, ?, ?);",
        [Nombre, Apellido, Email, Contraseña], 
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Valores insertados");
            }
        }
    );
});

app.post("/inicio", (req, res) => {

    const Email = req.body.Email;
    const Contraseña = req.body.contraseña;

    db.query(
        "SELECT * FROM usuarios WHERE Email = ? AND contraseña = ?;",
        [Email, Contraseña],
        (err, result) => {
            if (err) {
                res.send({err: err});
            } 

            if(result.length > 0){
                //res.send({message1: "Datos correctos" });
                res.send(result)
            }else{
                res.send({message: "Usuario o contraseña incorrectos" });
            }
        }
    );
});

app.get("/recomendados", (req, res) => {
    db.query(
        "SELECT * FROM lugar;",
        (err, result) => {
            res.send(result);
        }
    )
});


/* app.post("/recomendados", (req, res) => {

    const NombreLugar = req.body.Nombre;
    const TipoLugar = req.body.Tipo_de_lugar;
    const Calificación = req.body.Calificación;
    const Reporte = req.body.Reporte;
    const Descripción = req.body.Descripción;

    db.query(
        "SELECT * FROM lugar WHERE Nombre = ? Or Tipo_de_lugar = ? or Calificación = ? or Reporte = ?;"
        [NombreLugar, TipoLugar, Calificación, Reporte, Descripción],
        (err, result) => {
            if (err) {
                res.send({err: err});
            } 

            if(result.length > 0){
                //res.send({message1: "Datos correctos" });
                res.send(result)
            }else{
                res.send({message: "No hay lugares con esa información" });
            }
        }
    );
});  */

app.listen(3001, () => {
    console.log("corriendo en el puerto 3001");
}); 