
//alert("FUNCTION ACTIVO");
//############# Tipo de Variables
// const para valores constantes
const pi = 3.1415;
const pul = 2.54;
//var para variables globales
var days = 10;
var name = "Juan Jose";
//let para variables de bloque o locales
let count = 1;

//############# formas de impresion
//alert
//alert(name);
//console.log
console.log(name);
//body - pantalla
document.write(name + "Wilder duarte");
document.getElementById("box_one").innerHTML = "<h1>Juan Jose </h1>";
document.getElementById("box_two").innerText = "<h1>Juan Jose </h1>";

//librerias
//Swal.fire({
    //title: 'هل تريد الاستمرار؟',
    //icon: 'question',
    //iconHtml: '؟',
    //confirmButtonText: 'نعم',
    //cancelButtonText: 'لا',
  //  showCancelButton: true,
//    showCloseButton: true
// })

/*
Swal.fire({
    icon:"error",
    showConfirmButton: false,
    title: name,
    text: name, 
    footer: "footer: "+ name,
    background: "green",
    position: "top-start"

    });


*/


// ########### tipos de datos
var number_one = 20;
var number_two = 5.5;
//texto
var class_type = "Electiva tecnica 1";
// ########### operadores basicos
//suma
var suma = number_one + number_two;
console.log("suma = " + suma);
//resta
var resta = number_two - number_one;
console.log("resta  = " + resta);
//multiplicacion
var multi = number_one*number_two;
console.log("Multiplicacion = " + multi);
//division
var divi = number_one / number_two;
console.log("division = " + divi.toFixed(2));
//modulo
var modulo = number_one % number_two;
console.log("Modulo = " + modulo);
//booleanos
var boolean = true; //false
var array_num = [1,2,3,4,5];
var array_text = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var array_mix = [1, "a", 2, "c"];
var array_mul = [
    {name:"Wilder",last_name:"Duarte", age:"21"},
    {name:"Angela",last_name:"guerrero", age:"22"},
    {name:"celeste",last_name:"perez", age:"25"},
    {name:"Antonella",last_name:"lopez", age:"41"}
]

//Operadores logicos y estructuras condicionales
//And && con if - Ampersand

var bool = false;
var numeric = "10";
if(!bool && numeric === 10){ //bool == true
    console.log("entra if");


}

else{
    console.log("entra else ")
}

if(!bool || numeric == 7){
    console.log("entra if");
    numeric++;
}

else{
    console.log("entra else");
    numeric--;
}


//for

for(let j = 0; j<array_text.length; j++){
    console.log(array_text[j] + " "+ (j+1));
}

let f = 0;
while(f<array_text.length){
    console.log(array_text[f] + (f+1));
    f++;

}

//do while
let z = 0;
do{
    console.log(array_text[z] + (z+1));
    z++;
}while(z<array_text.length);

/*
function load_page(){
    alert("la pagina se ha cargado completamente")
}
*/
function change_color(){
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#00FF00";
}

const btn_limpiar = document.querySelector("#clear_color");
clear_color.addEventListener("click", () =>{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

});

//registro formulario
const form_register = document.getElementById("form_register");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const information = document.getElementById("information");

form_register.addEventListener("submit", name_event => {
    name_event.preventDefault();
    let info = "";
    if(nombres.value.length <= 2 || apellidos.value.length <= 2 ){
        alert("nombres o apellidos invalidos");
        info+= "nombres o apellidos invalidos";
        information.style.color = "red"
    }
    else{
        alert(nombres.value + "" + apellidos.value);

    }
    information.innerText = info;
})