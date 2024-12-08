const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(bodyParser.json());

// Base de datos simulada
let usuarios = [
    {
        idUsuario: 1,
        nombre: 'Daian Nieves',
        correo: 'daiannieves10@gmail.com',
        contrasena: '12345',
        codigoPostal: '12345',
        estado: 'Estado1',
        municipio: 'Municipio1',
        colonia: 'Colonia1',
        calle: 'Calle 1',
        telefono: '1234567890',
        numCasa: '101'
    },
    {
        idUsuario: 2,
        nombre: 'Nataly Diaz',
        correo: 'natalydias10@gmail.com',
        contrasena: '12345',
        codigoPostal: '12345',
        estado: 'Estado2',
        municipio: 'Municipio2',
        colonia: 'Colonia2',
        calle: 'Calle 2',
        telefono: '0987654321',
        numCasa: '102'
    },
    {
        idUsuario: 3,
        nombre: 'Angel Negrete',
        correo: 'angelnegrete10@gmail.com',
        contrasena: '12345',
        codigoPostal: '12345',
        estado: 'Estado3',
        municipio: 'Municipio3',
        colonia: 'Colonia3',
        calle: 'Calle 3',
        telefono: '12345',
        numCasa: '103'
    },
    {
        idUsuario: 4,
        nombre: 'David Rangel',
        correo: 'davidrangel10@gmail.com',
        contrasena: '12345',
        codigoPostal: '12345',
        estado: 'Estado4',
        municipio: 'Municipio4',
        colonia: 'Colonia4',
        calle: 'Calle 4',
        telefono: '67890',
        numCasa: '104'
    }
];

let categorias = [
    { idCategoria: 1, nombreCat: 'Herramientas manuales' },
    { idCategoria: 2, nombreCat: 'Herramientas electricas' },
    { idCategoria: 3, nombreCat: 'Herramientas de medición' }
];

let productos = [
    {
        idProducto: 1,
        idCategoria: 2,
        nombre: 'Engrapadora',
        descripcion: 'Engrapadora Tipo Pistola Para Tapiceria Con 3000 Grapas',
        precio: 188.0,
        stock: 10,
        imagen: 'https://m.media-amazon.com/images/I/engrapadora.jpg'
    },
    {
        idProducto: 2,
        idCategoria: 2,
        nombre: 'Kit desarmador',
        descripcion: 'Juego P/reparación De Celulares Y Disp. Electrónicos,77 Pzas',
        precio: 295.0,
        stock: 5,
        imagen: 'https://m.media-amazon.com/images/I/desarmador.jpg'
    },
    {
        idProducto: 3,
        idCategoria: 2,
        nombre: 'Pinza de presión',
        descripcion: 'Pinza Presión 10\' Mordaza Recta Pretul Granel Pretul 2270',
        precio: 94.0,
        stock: 15,
        imagen: 'https://m.media-amazon.com/images/I/pinza.jpg'
    },
    {
        idProducto: 4,
        idCategoria: 2,
        nombre: 'Martillo Uña Recta',
        descripcion: 'Martillo Uña Recta, 16oz, Mango Fibra De Vidrio Truper 19997',
        precio: 149.0,
        stock: 20,
        imagen: 'https://m.media-amazon.com/images/I/martillo.jpg'
    },
    {
        idProducto: 5,
        idCategoria: 1,
        nombre: 'Escalera Tubular',
        descripcion: 'Escalera Tubular, Plegable, 2 Peldaños, Pretul Pretul 24118',
        precio: 595.0,
        stock: 8,
        imagen: 'https://m.media-amazon.com/images/I/escaleras.jpg'
    },
    {
        idProducto: 6,
        idCategoria: 1,
        nombre: 'Taladro Inalámbrico',
        descripcion: 'NANWEI Kit de Taladro Inalámbrico Electrico',
        precio: 594.0,
        stock: 12,
        imagen: 'https://m.media-amazon.com/images/I/taladro.jpg'
    },
    {
        idProducto: 7,
        idCategoria: 1,
        nombre: 'Pulidora inalámbrica',
        descripcion: 'Esmeriladora Angular Pulidora Inalambrica Con Accesorios',
        precio: 799.0,
        stock: 6,
        imagen: 'https://m.media-amazon.com/images/I/pulidora.jpg'
    },
    {
        idProducto: 8,
        idCategoria: 1,
        nombre: 'Lijadora',
        descripcion: 'Lijadora Roto Orbital Profesional Shawty C/16 Lija 14000 Opm',
        precio: 748.0,
        stock: 10,
        imagen: 'https://m.media-amazon.com/images/I/lijadora.jpg'
    },
    {
        idProducto: 9,
        idCategoria: 1,
        nombre: 'Pistola de calor',
        descripcion: 'RexQualis de 2000w Temperatura Regulable 4 Boquillas',
        precio: 384.0,
        stock: 15,
        imagen: 'https://m.media-amazon.com/images/I/pistolacalor.jpg'
    },
    {
        idProducto: 10,
        idCategoria: 3,
        nombre: 'Multímetro Digital',
        descripcion: 'Multímetro Digital Profesional Xl830l Medidor Corriente Mano',
        precio: 93.0,
        stock: 25,
        imagen: 'https://m.media-amazon.com/images/I/multimetro.jpg'
    },
    {
        idProducto: 11,
        idCategoria: 3,
        nombre: 'Calibrador digital',
        descripcion: 'Calibrador Digital RexQualis 6in Precisión 0.01mm Metal',
        precio: 249.0,
        stock: 12,
        imagen: 'https://m.media-amazon.com/images/I/calibrador.jpg'
    },
    {
        idProducto: 12,
        idCategoria: 3,
        nombre: 'Multímetro de gancho',
        descripcion: 'AstroAI Multimetro de Gancho, Pinza Amperimétrica',
        precio: 610.0,
        stock: 7,
        imagen: 'https://m.media-amazon.com/images/I/multimetrogancho.jpg'
    }
];

let carrito = [
    { idCarrito: 1, idUsuario: 1, idProducto: 1, cantidadProducto: 2 }
];

// Endpoints de usuarios
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.status(201).json({ mensaje: 'Usuario agregado correctamente.', usuario });
});

app.post('/login', (req, res) => {
    const { correo, contrasena } = req.body;

    // Buscar al usuario en la "base de datos"
    const usuario = usuarios.find(u => u.correo === correo && u.contrasena === contrasena);

    if (usuario) {
        res.status(200).json({ success: true, mensaje: 'Login exitoso', usuario });
    } else {
        res.status(401).json({ success: false, mensaje: 'Credenciales inválidas' });
    }
});

// Endpoints de categorías
app.get('/categorias', (req, res) => {
    res.json(categorias);
});

app.post('/categorias', (req, res) => {
    const categoria = req.body;
    categorias.push(categoria);
    res.status(201).json({ mensaje: 'Categoría agregada correctamente.', categoria });
});

// Endpoints de productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

app.post('/productos', (req, res) => {
    const producto = req.body;
    productos.push(producto);
    res.status(201).json({ mensaje: 'Producto agregado correctamente.', producto });
});

// Endpoints de carrito
app.get('/carrito', (req, res) => {
    res.json(carrito);
});

app.post('/carrito', (req, res) => {
    const { idUsuario, idProducto, cantidadProducto } = req.body;

    // Validar que el usuario y el producto existan
    const usuario = usuarios.find(u => u.idUsuario === idUsuario);
    const producto = productos.find(p => p.idProducto === idProducto);

    if (!usuario) {
        return res.status(400).json({ mensaje: 'El usuario no existe.' });
    }
    if (!producto) {
        return res.status(400).json({ mensaje: 'El producto no existe.' });
    }

    // Agregar al carrito
    const nuevoCarrito = { idCarrito: carrito.length + 1, idUsuario, idProducto, cantidadProducto };
    carrito.push(nuevoCarrito);
    res.status(201).json({ mensaje: 'Producto agregado al carrito.', carrito: nuevoCarrito });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
