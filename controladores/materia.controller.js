const {Materia}=require('../models/materia')

const getMaterias= async (req,res)=>{
    const materias=Materia.findAll({})
    console.log(materias)
    res.status(200).json({mensaje:'Aca van las materias'})
}


const getMateriaById= (req,res)=>{
    const id= req.params.id
    res.status(200).json({id})
}

module.exports = {getMaterias, getMateriaById}