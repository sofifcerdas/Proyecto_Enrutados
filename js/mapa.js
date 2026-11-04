
// Obtener los autobuses del mapa

const autobuses = document.querySelectorAll(".autobus");

// Obtener los espacios donde aparece la informacion

const numero = document.getElementById("numero");
const ruta = document.getElementById("ruta");
const hora = document.getElementById("hora");

// Recorrer los autobuses

autobuses.forEach(function(bus) {

    bus.addEventListener("click", function() {

        numero.textContent = "Unidad: " + bus.dataset.numero;

        ruta.textContent = "Ruta: " + bus.dataset.ruta;

        hora.textContent = "Ultima actualizacion: " + bus.dataset.hora;

    });

});
