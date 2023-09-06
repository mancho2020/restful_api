const express = require('express')
const app = express()   
const bodyParser = require('body-parser')
const morgan = require('morgan')

//Validamos que no estemos en ambiente de producción
if(process.env.NODE_ENV != 'production'){
    // Se carga la configuración archivo .env al process.env
    require('dotenv').config();
}

app.set('port', process.env.PORT || 4000);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('combined'));


app.use('/api/V1/users',require('./api/V1/routees/user.routes'))
app.use('/api/V1/articles',require('./api/V1/routees/articles.routes'))
app.use('/api/V1/categories',require('./api/V1/routees/categories.routes'))

// app.get('/',(req, res)=>{
//     console.log("ruta ppal");
//     res.send({title:'Ruta ppal', message: 'Acesso a la ruta ppal'})
// })

app.listen(app.get('port'),()=>{
    console.log(`Server running on localhost:${app.get('port')}`)
})