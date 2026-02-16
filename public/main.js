// la funcion principal del main es:

//  1. Obtiene los valores del formulario 
//  2. Valida que los campos tengan información
//  3. La funcion fetch hace las peticiones al servidor
//  4. /calcular-promedio es la ruta a donde se estan enviando la petición
//  5. method: 'POST' → Vamos a enviar datos
//  6. headers → Estamos enviando JSON
//  7. body → Aquí van los datos convertidos a texto JSON

// Evento para calcular promedio
document.getElementById('btnCalcular').addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value;
    const unidad1 = parseFloat(document.getElementById('unidad1').value);
    const unidad2 = parseFloat(document.getElementById('unidad2').value);
    const unidad3 = parseFloat(document.getElementById('unidad3').value);

    if (!nombre || isNaN(unidad1) || isNaN(unidad2) || isNaN(unidad3)) {
        alert('Por favor completa todos los campos correctamente');
        return;
    }

    // Calcular promedio localmente
    const promedio = (unidad1 + unidad2 + unidad3) / 3;
    const estatus = promedio >= 6 ? 'Aprobado' : 'Reprobado';

    document.getElementById('promedio').value = promedio.toFixed(2);
    document.getElementById('estatus').value = estatus;

});

// limpiar
document.getElementById('btnLimpiar').addEventListener('click', () => {
    document.getElementById('nombre').value = '';
    document.getElementById('unidad1').value = '';
    document.getElementById('unidad2').value = '';
    document.getElementById('unidad3').value = '';
    document.getElementById('promedio').value = '';
    document.getElementById('estatus').value = '';
});