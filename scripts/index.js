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
}

function deleteData(){
    var users = document.getElementById('users');
    users.innerHTML = "";
}

function printDataXML(){
    deleteData();
    var count = 0;
    var users = document.getElementById('users');
    users.innerHTML = "";
    lista.forEach(function(element) {
        var text = `&ltuser&gt
        &ltnombre&gt ${element.nombre} &lt/nombre&gt
        &ltid&gt ${element.id}&lt/id&gt
        &ltbool&gt ${element.bool}&lt/bool&gt
        &lt/user&gt `
        users.innerHTML = users.innerHTML + text;
    }, this); 
}

function printDataJSon(){
    deleteData();
    var count = 0;
    var users = document.getElementById('users');
    users.innerHTML = "";
    var el = document.createElement("button");
    lista.forEach(function(element) {
        var text = `usuario = { 
        nombre: "${element.nombre}",
        id: ${element.id},
        bool: ${element.bool}
    } `
        users.innerHTML = users.innerHTML + text;
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
    var users = document.getElementById('users');
    var text = `usuario = {
        nombre: "${usuario.nombre}",
        id: ${usuario.id},
        bool: ${usuario.bool}
    }\n`
    users.innerHTML = users.innerHTML + text;
    saveData(usuario);
}
