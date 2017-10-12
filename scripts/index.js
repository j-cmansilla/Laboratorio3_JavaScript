var x = 3; 
x = "hola";
x = true; 
x = {};
x = ["asdf",true];
var lista = [];
var i = 0;

function test(val){
    var input = document.getElementById(val);
    console.log(input.value);
    alert(input.value);
};

function saveData(usuario){
    lista.push(usuario);
    alert(`Usuario: ${usuario.nombre} ha sido almacenado!`);
}

function deleteData(){
    var users = document.getElementById('users');
    users.innerText = "";
    
}

function printData(){
    deleteData();
    var count = 0;
    var users = document.getElementById('users');
    var el = document.createElement("button");
    lista.forEach(function(element) {
        var text = `usuario = {
        nombre: "${element.nombre}",
        id: ${element.id},
        bool: ${element.bool}
    }\n`
        users.insertAdjacentText('afterend',text);
    }, this);
    
}

function getData(id, nombre, bool){
    var idGet = document.getElementById(id);
    var nombreGet = document.getElementById(nombre);
    var boolGet = document.getElementById(bool);
    var usuario = {
        nombre: nombreGet.value,
        id: idGet.value,
        bool: boolGet.value
    }
    saveData(usuario);
}

function showData(id, nombre, bool){
    var idGet = document.getElementById(id);
    var nombreGet = document.getElementById(nombre);
    var boolGet = document.getElementById(bool);
    var usuario = {
        nombre: nombreGet.value,
        id: idGet.value,
        bool: boolGet.value
    }
    alert(`El resultado del JSon son: 
    usuario = {
        nombre: "${usuario.nombre}",
        id: ${usuario.id},
        bool: ${usuario.bool}
    }`);
    saveData(`usuario = {
       nombre: "${usuario.nombre}",
       id: ${usuario.id},
       bool: ${usuario.bool}
    }`);
}

function showObject(){
    var objeto = {
        nombre: "jmansilla",
        id: 1235123132,
        carrera: "ingenieria",
        edad: 5,
        tornillos: [
            {
                superior: {
                    tipo: "cruz",
                    longitud: 3 
                },
                cantidad: 2
            },{
                inferior: {
                    tipo: "cruz",
                    longitud: 3 
                },
                cantidad: 6
            }    
        ]
    };
    console.log(objeto);
    alert(`El objeto ${objeto.nombre} de edad ${objeto.edad}`);
}