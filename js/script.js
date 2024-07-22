
let inventario = [
    { marca: "Motorola", modelo: "g14", precio: 220 },
    { marca: "Motorola", modelo: "g23", precio: 250 },
    { marca: "Motorola", modelo: "g54", precio: 300 },
    { marca: "Motorola", modelo: "g84", precio: 350 },
    { marca: "Samsung", modelo: "s20", precio: 400 },
    { marca: "Samsung", modelo: "s22", precio: 450 },
    { marca: "Samsung", modelo: "s23", precio: 500 },
    { marca: "Samsung", modelo: "s24", precio: 550 },
    { marca: "Samsung", modelo: "s24 ultra", precio: 600 },
    { marca: "iphone", modelo: "13", precio: 650 },
    { marca: "iphone", modelo: "14", precio: 700 },
    { marca: "iphone", modelo: "15", precio: 750 },
];

function agregarCelular() {
    let marca = prompt("Ingresar la marca del celular que desee agregar al inventario:");
    let modelo = prompt("Ingrese el modelo del celular que desee agregar al inventario:");
    let precio = parseFloat(prompt("Ingrese el precio del celular que desee agregar al inventario:"));
    
    let celular = {
        marca: marca,
        modelo: modelo,
        precio: precio
    };
    
    inventario.push(celular);
    console.log("Celular agregado:", celular);
}

function mostrarInventario() {
    console.log("Inventario de Celulares:");
    inventario.forEach(celular => {
        console.log(`Marca: ${celular.marca}, Modelo: ${celular.modelo}, Precio: $${celular.precio}`);
    });
}

function buscarCelularPorMarca() {
    let marcaBuscada = prompt("Ingrese la marca del celular que desea buscar:");
    let resultado = inventario.filter(celular => celular.marca.toLowerCase() === marcaBuscada.toLowerCase());
    
    if (resultado.length > 0) {
        console.log(`Los celulares de la marca son ${marcaBuscada}:`);
        resultado.forEach(celular => {
            console.log(`Modelo: ${celular.modelo}, Precio: $${celular.precio}`);
        });
    } else {
        console.log(`No se encontraron celulares de la marca ${marcaBuscada}.`);
    }
}

mostrarInventario();
agregarCelular();
mostrarInventario();
