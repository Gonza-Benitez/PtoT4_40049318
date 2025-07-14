import {pool} from './database.js';

class librosController{

    async getAll(req, res) {
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }

    async add(req, res){
        const libros = req.body;
        const [result] = await pool.query(`INSERT INTO libros(nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libros.nombre, libros.autor, libros.categoria, libros.año_publicacion, libros.ISBN])
        res.json({"Id insertado": result.insertId});
    }

    async delete(req, res){
        const libros = req.body;
        const [result] = await pool.query(`DELETE FROM libros WHERE id=(?)`, [libros.ISBN]);
        res.json({"Registros Eliminados": result.affectedRows});
    }
    async update(req, res){
        const libros = req.body;
        const [result] = await pool.query(`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), año_publicacion=(?), ISBN=(?) WHERE id=(?)`, [libros.nombre, libros.autor, libros.categoria, libros.año_publicacion, libros.ISBN, libros.id]);
        res.json({"Registros Actualizados": result.changedRows});
    }

}

export const libros = new librosController();