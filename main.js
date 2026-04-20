const express = require('express');
const app = express();
const PORT = "3000";
const materiaRoute=require('./routes/materias.route');



app.use(materiaRoute);





app.listen(PORT, (err)=>{
    if(err){
        console.error(err.message)
        process.exit(1)
    }
    console.log(`La aplicación esta eschucando en el puerto ${PORT}`)
})
