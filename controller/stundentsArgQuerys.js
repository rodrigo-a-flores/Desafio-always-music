const pool = require('../config/db.js');
const selectAll = async (req, res) => {
    const consulta = {
        text: 'select * from students'
    }
    try {
        const response = await pool.query(consulta);
        console.log('Estudiantes registrados:', response.rows);
        return res.json(response.rows);
    } catch (err) {
        console.error('Error al obtener los estudiantes:', err.stack);
    }
}
const selectByRut = async (req, res) => {
    const rut = req.params.rut;   
    const consulta = {
        text: 'select * from students where rut = $1',
        values: [rut]
    };
    try {
        const response = await pool.query(consulta);
        if (response.rows.length > 0) {
            console.log('Estudiante encontrado:', response.rows);
            return res.json(response.rows);
        } else {
            console.log('No se encontró un estudiante con el RUT proporcionado.');
        }
    } catch (err) {
        console.error('Error al obtener el estudiante por RUT:', err.stack);
    }
}
const insertStudents = async (req, res) =>{
    const consulta = {
        text: 'insert into students (nombre, rut, curso, nivel) values ($1, $2, $3, $4)',
        values: ["Guido", "11222333-4", "Ingles", 1]
    };
    try {
        const response = await pool.query(consulta);
        console.log('Estudiante agregado:', response.rows);
    } catch (err) {
        console.error('Error al agregar el estudiante:', err.stack);
    }
}
const updateStudents = async (req, res) =>{
    const nombre = req.query.nombre;
    const rut = req.params.rut;
    console.log(nombre, rut);
    const consulta = {
        text: 'update students set nombre = $1 where rut = $2',
        values: [nombre, rut]
    };

    try {
        const response = await pool.query(consulta);
        console.log('Estudiante actualizado:', response.rows);
    } catch (err) {
        console.error('Error al actualizar el estudiante:', err.stack);
    }
}
const deleteStudents = async (req, res) =>{
    const rut = req.params.rut;
    const consulta = {
        text: 'delete from students where rut = $1',
        values: [rut]
    };

    try {
        const res = await pool.query(consulta);
        if(res.rowCount > 0){
            console.log('Estudiante eliminado:');
        }else{
            console.log('No se encontró un estudiante con el RUT proporcionado.');
        }
    } catch (err) {
        console.error('Error al eliminar el estudiante:', err.stack);
    }
}
module.exports = {
    selectAll,
    selectByRut,
    insertStudents,
    updateStudents,
    deleteStudents
}