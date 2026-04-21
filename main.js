const express = require('express');
const app = express();
const PORT = "3000";
const materiaRoute=require('./routes/materias.route');
const{db, sequelize} =require('./models')



app.use(materiaRoute);





app.listen(PORT, (err)=>{
    if(err){
        console.error(err.message)
        process.exit(1)
    }
    sequelize.sync({force:true})
    console.log(`La aplicación esta eschucando en el puerto ${PORT}`)
})
