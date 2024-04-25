const pool = require('../config/db.js');
const express = require('express');
const router = express.Router();
const { selectAll, selectByRut, insertStudents, updateStudents, deleteStudents } = require('../controller/stundentsArgQuerys.js');

router.get('/all', selectAll);

router.get('/:rut', selectByRut);

router.post('/insert',insertStudents);

router.put('/update/:rut', updateStudents);

router.delete('/delete/:rut', deleteStudents);

module.exports = router;