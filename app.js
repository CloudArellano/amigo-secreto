// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar los nombres
let amigos = [];
//Listas 
let lista = document.getElementById('listaAmigos');
let resultado = document.getElementById("resultado");

//función para agregar amigos
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
    }
    
    //limpiar lista
    lista.innerHTML = "";
    //Mostrar lista de amigos
    if (amigos.length > 0) {
        for(i=0; i<amigos.length; i++) {
            let nuevoAmigo = document.createElement("li");
            nuevoAmigo.textContent = amigos[i];
            lista.appendChild(nuevoAmigo);
        }
    }
    //console.log(amigos);
    
}


function sortearAmigo() {
    resultado.innerHTML = "";
    if(amigos.length > 0) {
        let indice = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = document.createElement("li");
        amigoSorteado.textContent = `El amigo sorteado es: ${amigos[indice]}`;
        lista.innerHTML = "";
        resultado.appendChild(amigoSorteado);
    }
}
