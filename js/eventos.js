/* constructor */

class Motos {
    constructor(marca, precio, cilindrada, velocidad) {
        this.marca = marca.toUpperCase();
        this.precio = parseFloat(precio);
        this.cilindrada = cilindrada;
        this.velocidad = velocidad;
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender(){
        this.vendido = true;
    }
    detalle(){ 
        console.log(" Marca: "+ this.marca +" Precio: "+ this.precio +" CC: "+ this.cc +" Vel: " +this.vel);
    }
}

const productos = [];

const producto1 = new Motos("ducatti", 200, "1000cc", "300km/h")
productos.push (producto1);

const producto2 = new Motos("honda", 250, "1200cc", "400km/h")
productos.push (producto2);

const producto3 = new Motos("bmw", 210, "1100cc", "350km/h")
productos.push (producto3);

const producto4 = new Motos("ktm", 190, "700cc", "280km/h")
productos.push (producto4);

const producto5 = new Motos("benelli", 170, "800cc", "290km/h")
productos.push (producto5);

const producto6 = new Motos("yamaha", 170, "800cc", "290km/h")
productos.push (producto6);


//DOM

const titulo = document.getElementById(tittle);
tittle.innerHTML = "Motorcycle Shop";

//CreatElement

const frase = document.getElementById("frase");

const parrafo = document.createElement("p");

parrafo.innerHTML = "Subite a la moto de tus sueños"

frase.appendChild(parrafo);

/*-------------- EVENTOS ----------------*/

/* ducatti*/
let ducatti = document.getElementById("ducatti");

let ducattiCaracteristicas = document.getElementById("ducattiCaracteristicas");

let caracteristicasMoto1 = document.getElementById("btnMoto1");

caracteristicasMoto1.addEventListener("click", mostrarM1);

function mostrarM1(){
    ducatti.style.display="none";
    ducattiCaracteristicas.style.display="block";
}

/* honda */
let honda = document.getElementById("honda");

let hondaCaracteristicas = document.getElementById("hondaCaracteristicas");

let caracteristicasMoto2 = document.getElementById("btnMoto2");

caracteristicasMoto2.addEventListener("click", mostrarM2);

function mostrarM2(){
    honda.style.display="none";
    hondaCaracteristicas.style.display="block";
}

/* bmw */
let bmw = document.getElementById("bmw");

let bmwCaracteristicas = document.getElementById("bmwCaracteristicas");

let caracteristicasMoto3 = document.getElementById("btnMoto3");

caracteristicasMoto3.addEventListener("click", mostrarM3);

function mostrarM3(){
    bmw.style.display="none";
    bmwCaracteristicas.style.display="block";
}

/* ktm */
let ktm = document.getElementById("ktm");

let ktmCaracteristicas = document.getElementById("ktmCaracteristicas");

let caracteristicasMoto4 = document.getElementById("btnMoto4");

caracteristicasMoto4.addEventListener("click", mostrarM4);

function mostrarM4(){
    ktm.style.display="none";
    ktmCaracteristicas.style.display="block";
}

/* benelli */
let benelli = document.getElementById("benelli");

let benelliCaracteristicas = document.getElementById("benelliCaracteristicas");

let caracteristicasMoto5 = document.getElementById("btnMoto5");

caracteristicasMoto5.addEventListener("click", mostrarM5);

function mostrarM5(){
    benelli.style.display="none";
    benelliCaracteristicas.style.display="block";
}

/* yamaha */
let yamaha = document.getElementById("yamaha");

let yamahaCaracteristicas = document.getElementById("yamahaCaracteristicas");

let caracteristicasMoto6 = document.getElementById("btnMoto6");

caracteristicasMoto6.addEventListener("click", mostrarM6);

function mostrarM6(){
    yamaha.style.display="none";
    yamahaCaracteristicas.style.display="block";
}



//Recorriendo Array de objetos para modificar HTML

let marcas = document.getElementById("marcas");

let btnMarcas = document.getElementById("btnMarcas");

for (const Motos of productos){
    let li = document.createElement("li");
    li.innerHTML = Motos.marca;
    marcas.appendChild(li);
}

btnMarcas.addEventListener("click", mostrarMarcas);

function mostrarMarcas(){   
    marcas.style.display="block";
}



/*function elegitumoto(){

    alert("¿Querés comprar una moto?");

    let dosRuedas = prompt ("Ingresa tu respuesta");

    function quieroUna(){
        respuesta = dosRuedas ;
    }

    quieroUna (); 

    alert("Tu respuesta es"+ " " + respuesta + " " +"QUIERO nuevas aventuras");

if (respuesta == "si"){
    alert("A continuación te mostramos las motos más rapidas");
    moto1.detalle();
    moto2.detalle();
    moto3.detalle();
    moto4.detalle();
    moto5.detalle();


    let entrada = prompt("¿Que moto preferis?, moto1, moto2, moto3, moto4 o moto5.");


    switch (entrada) {
        case "moto1":
            alert("Elegiste bien, alcanza una velocidad de 300km/h.");
            break;
        case "moto2":
            alert("Elegiste bien, alcanza una velocidad de 400km/h.");
            break;
        case "moto3":
            alert("Elegiste bien, alcanza una velocidad de 350km/h.");
            break;
        case "moto4":
            alert("Elegiste bien, alcanza una velocidad de 280km/h.");
            break;
        case "moto5":
            alert("Elegiste bien, alcanza una velocidad de 290km/h.");
            break;
        default:
            alert("Es mucha velocidad para vos.")
            break;
    }

}else{
    alert ("No estas listo para nuevas aventuras");
    }


}*/