const getMaterias= (req,res)=>{
    res.status(200).json({mensaje:'Aca van las materias'})
}


const getMateriaById= (req,res)=>{
    const id= req.params.id
    res.status(200).json({id})
}

module.exports = {getMaterias, getMateriaById}