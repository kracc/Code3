

$('.menu-bar').on('click', function(){
    $('.contenido').toggleClass('abrir');
    
});

$('#modal1').on('click', function(){
   // $('#bienvenida').toggleClass('ocultarbienvenida');
    $('#bienvenida').hide('#bienvenida');
   // $('#exampleModal').show('#exampleModal');
});

$('#modal2-1').on('click', function(){
     $('#bienvenida').hide('#bienvenida');
     
 });

 //manejo de los tipos de cuenta
var cuenta=true;
if (cuenta == false){
    $('<a class ="delLista" id="modal2" href="#exampleModa2-1" data-toggle="modal" data-target="#exampleModa2-1">Cuenta</a>').replaceAll('#modal2');  
}
else
$('<a class ="delLista" id="modal2" href="#exampleModa2-2" data-toggle="modal" data-target="#exampleModa2-2">Cuenta</a>').replaceAll('#modal2');  

function errormas([]){
    $('#exampleModal').modal('hide')
}