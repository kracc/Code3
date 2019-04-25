
// $.ajax({
//     url:"http://localhost:3335/peliculas/"+id,
//     method:"get",
//     dataType:"json",
//     success:function(res){
//         console.log(res);
//         for(var i=0; i<res[0].imagenes.length;i++){
//             $("#contenedor-imagenes").append(
//                 `<div class="carousel-item active">
//                     <img src="${res[0].imagenes[i]}" class="d-block w-100" alt="...">
//                 </div>`
//             );
//         }
//         $('#carousel').carousel();
//     },
//     error:function(error){
//         console.log(error);
//     }
// });
