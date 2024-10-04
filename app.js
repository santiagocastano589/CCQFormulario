var modal = document.getElementById("ventanaModal");

var boton = document.getElementById("abrirModal");

var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// // Si el usuario hace click fuera de la ventana, se cierra.
// window.addEventListener("click",function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });