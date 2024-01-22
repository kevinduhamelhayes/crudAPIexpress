const connection = require('../database');

exports.listarProductos = (req, res) => {
    connection.query('SELECT * FROM Productos', (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(200).json(results);
    });
};

exports.crearProducto = (req, res) => {
    const producto = req.body;
    connection.query('INSERT INTO Productos SET ?', producto, (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(201).send(`Producto añadido con ID: ${results.insertId}`);
    });
};

exports.actualizarProducto = (req, res) => {
    const id = req.params.id;
    const producto = req.body;
    connection.query('UPDATE Productos SET ? WHERE id = ?', [producto, id], (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.status(200).send(`Producto modificado con ID: ${id}`);
    });
}


exports.obtenerProducto = (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM Productos WHERE id = ?', id, (error, results) => {
      if (error) {
          return res.status(500).send('Error al consultar la base de datos.');
      }
      if (results.length === 0) {
          return res.status(404).send('Producto no encontrado.');
      }
      res.status(200).json(results);
  });
};

exports.eliminarProducto = (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM Productos WHERE id = ?', id, (error, results) => {
      if (error) {
          return res.status(500).send('Error al eliminar el producto.');
      }
      if (results.affectedRows === 0) {
          return res.status(404).send('Producto no encontrado o ya eliminado.');
      }
      res.status(200).send(`Producto eliminado con ID: ${id}`);
  });
};
