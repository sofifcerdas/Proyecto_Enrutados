// 1. Simulación de la Tabla "Ruta"
const tablaRuta = [
    { id_ruta: "101", nombre_ruta: "San José - Alajuela por Pista" },
    { id_ruta: "102", nombre_ruta: "Heredia - Cartago Directo" },
    { id_ruta: "103", nombre_ruta: "San José - Heredia por Tibás" }
];

// 2. Simulación de la Tabla "Parada"
const tablaParada = [
    { id_parada: "p1", nombre_parada: "Terminal Central" },
    { id_parada: "p2", nombre_parada: "Parada Hospital México" },
    { id_parada: "p3", nombre_parada: "Terminal Alajuela" },
    { id_parada: "p4", nombre_parada: "Terminal Heredia" },
    { id_parada: "p5", nombre_parada: "Terminal Cartago" }
];

// 3. Simulación de la Tabla Intermedia "Ruta_Parada" (Muchos a Muchos con Orden)
const tablaRutaParada = [
    // Paradas asignadas a la Ruta 101
    { id_ruta: "101", id_parada: "p1", orden_parada: 1 },
    { id_ruta: "101", id_parada: "p2", orden_parada: 2 },
    { id_ruta: "101", id_parada: "p3", orden_parada: 3 },
    // Paradas asignadas a la Ruta 102
    { id_ruta: "102", id_parada: "p4", orden_parada: 1 },
    { id_ruta: "102", id_parada: "p5", orden_parada: 2 }
];

// 4. Simulación de la Tabla "Horario"
const tablaHorario = [
    { id_horario: "h1", id_ruta: "101", hora_salida: "06:00 AM", dias_operacion: "L-V" },
    { id_horario: "h2", id_ruta: "101", hora_salida: "08:00 AM", dias_operacion: "L-V" },
    { id_horario: "h3", id_ruta: "102", hora_salida: "07:15 AM", dias_operacion: "S-D" }
];

// Obtener los autobuses del mapa
const autobuses = document.querySelectorAll(".autobus");

// Obtener los espacios donde aparece la informacion existente
const numero = document.getElementById("numero");
const ruta = document.getElementById("ruta");
const hora = document.getElementById("hora");

// Recorrer los autobuses
autobuses.forEach(function(bus) {

    bus.addEventListener("click", function() {
        
        numero.textContent = "Unidad: " + bus.dataset.numero;
        ruta.textContent = "Ruta: " + bus.dataset.ruta;
        hora.textContent = "Ultima actualizacion: " + bus.dataset.hora;

              const idRutaAsignada = bus.dataset.id_ruta || "101"; 

  
        const paradasFiltradas = tablaRutaParada
            .filter(rp => rp.id_ruta === idRutaAsignada)
            .map(rp => {
                const paradaReal = tablaParada.find(p => p.id_parada === rp.id_parada);
                return (paradaReal ? paradaReal.nombre_parada : "Parada") + " (" + rp.orden_parada + ")";
            });


        const horariosFiltrados = tablaHorario
            .filter(h => h.id_ruta === idRutaAsignada)
            .map(h => h.hora_salida + " [" + h.dias_operacion + "]");

        console.log("--- CONSULTA MODULO B ---");
        console.log("Ruta ID:", idRutaAsignada);
        console.log("Paradas Encontradas (Ruta_Parada -> Parada):", paradasFiltradas);
        console.log("Horarios Registrados (Horario):", horariosFiltrados);
    });
});
