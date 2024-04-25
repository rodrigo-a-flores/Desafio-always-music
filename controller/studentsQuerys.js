const pool = require('../config/db.js');
const selectAll = (req, res) => {
    try{            
        const selectStudents = async () => {
            const text = 'select * from students';
            const response = await pool.query(text);
            console.log(response.rows);
            return res.json(response.rows);
        };
        selectStudents();
        } catch (err) {
            console.log(err.stack)
        }
}
const selectByRut = (req, res) => {
    try{
        const selectStudents = async () => {
            const text = 'select * from students where rut = $1';
            const values = [req.params.rut];
            const response = await pool.query(text, values);
            console.log(response.rows);
            return res.json(response.rows);
        };
        selectStudents();
    } catch (err) {
        console.log(err.stack)
    }
}
const insertStudents = (req, res) =>{
    try{
        const insertStudents = async () => {
            const text = 'insert into students (nombre, rut, curso, nivel) values ($1, $2, $3, $4)';
            const values = ['Antonio', '11111111-1', 'Leyes', '5'];
            const response = await pool.query(text, values);
            console.log(response.rows);
            return res.json(response.rows);
        };
        insertStudents();
    } catch (err) {
        console.log(err.stack)
    }
}
const updateStudents = (req, res) =>{
    try{
        const updateStudents = async () => {
            const text = 'update students set nombre = $1 where id = $2';
            const values = ['Taira', 5];
            const response = await pool.query(text, values);
            console.log(response.rows);
        };
        updateStudents();
    } catch (err) {
        console.log(err.stack)
    }
}
const deleteStudents = (req, res) =>{
    try{
        const deleteStudents = async () => {
            const text = 'delete from students where id = $1';
            const values = [8];
            const response = await pool.query(text, values);
            console.log(response.rows);
        };
        deleteStudents();
    } catch (err) {
        console.log(err.stack)
    }
}
module.exports = {
    selectAll,
    selectByRut,
    insertStudents,
    updateStudents,
    deleteStudents
}