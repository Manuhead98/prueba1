const express = require('express')
const app = express()
const PORT = "3005"

app.use(express.json())



app.listen(PORT, (err)=>{
    if(err){
        console.error(err.message)
        process.exit(1)
    }
    console.log(`La aplicación esta eschucando en el puerto ${PORT}`)
})
