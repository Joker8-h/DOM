document.addEventListener('DOMContentLoaded', function() {

    var miModal = document.getElementById('modalConfirmacion'); 
    var mensajeModal = document.getElementById('mensajeModal');
    var botonConfirmar = document.getElementById('botonConfirmar');
    var botonCancelar = document.getElementById('botonCancelar');

    var callbackConfirmacion = null; 

    function mostrarModalConfirmacion(mensaje, alConfirmar) {
        mensajeModal.textContent = mensaje;
        miModal.style.display = 'flex'; 
        callbackConfirmacion = alConfirmar; 
    }

    botonConfirmar.onclick = function() {
        if (callbackConfirmacion) {
            callbackConfirmacion();
        }
        miModal.style.display = 'none'; // Esconde el modal
    };

    botonCancelar.onclick = function() {
        miModal.style.display = 'none'; // Simplemente esconde el modal
    };

    // --- Ejercicio 1: Seleccionar y Mostrar Información ---
    var btnEjecutar1 = document.getElementById('ejecutarEj1'); 
    btnEjecutar1.addEventListener('click', function() {
        // Seleccionar el div con ID 'infoDiv'
        var elDivInfo = document.getElementById('info'); 
        if (elDivInfo) { 
            console.log('Ejercicio 1: Contenido del div con ID "infoDiv":', elDivInfo.textContent);
        }

        // Seleccionar el primer párrafo con la clase detalleParrafo
        var elParrafoDetalle = document.querySelector('.detalle');
        if (elParrafoDetalle) {
            elParrafoDetalle.textContent = 'Este es un detalle modificado con querySelector.';
            console.log('Ejercicio 1: Texto del párrafo ".detalle" modificado.');
        }

        
        var todosLosParrafos = document.querySelectorAll('p');
        for (var i = 0; i < todosLosParrafos.length; i++) {
            todosLosParrafos[i].style.backgroundColor = 'lightblue'; // Cambia el color de fondo
        }
        console.log('Ejercicio 1: Todos los párrafos tienen fondo lightblue.');
    });

    // --- Ejercicio 2: Modificar Contenido y Atributos ---
    var btnEjecutar2 = document.getElementById('ejecutarEj2'); 
    btnEjecutar2.addEventListener('click', function() {
        var miEnlace = document.getElementById('enlaceEj2'); 
        if (miEnlace) {
            miEnlace.href = 'https://www.google.com';
            miEnlace.textContent = '¡nuevo link!';
            console.log('Ejercicio 2: El primer enlace ahora apunta a Google.');
        }

        // Seleccionar el elemento con la clase 'tituloEj2'
        var elTitulo = document.querySelector('.tituloEj2');
        if (elTitulo) {
            elTitulo.textContent = '¡Título Nuevo y Modificado!';
            console.log('Ejercicio 2: El título ha sido modificado.');
        }

        // Cambiar el color de fondo del body
        document.body.style.backgroundColor = '#f0fff4'; 
        console.log('Ejercicio 2: Color de fondo del body cambiado.');
    });

    // --- Ejercicio 3: Crear y Eliminar Elementos Dinámicamente ---
    var btnCrearParrafo = document.getElementById('crearParrafoEj3'); 
    var btnEliminarPrimerParrafo = document.getElementById('eliminarParrafoEj3'); 
    var zonaContenidoDinamico = document.getElementById('areaContenidoDinamicoEj3'); 

    btnCrearParrafo.addEventListener('click', function() {
        var nuevoParrafo = document.createElement('p');
        nuevoParrafo.textContent = 'Este párrafo fue creado dinámicamente. ¡Hola!';
        nuevoParrafo.classList.add('p-3', 'bg-purple-100', 'rounded', 'mb-2'); 
        zonaContenidoDinamico.appendChild(nuevoParrafo); 
        console.log('Ejercicio 3: Párrafo dinámico creado.');
    });

    btnEliminarPrimerParrafo.addEventListener('click', function() {

        var parrafoParaBorrar = document.querySelector('.parrafo-a-eliminar'); 
        if (parrafoParaBorrar) {
            parrafoParaBorrar.parentNode.removeChild(parrafoParaBorrar);
            console.log('Ejercicio 3: Párrafo inicial eliminado.');
        } else {
            var parrafoDinamico = zonaContenidoDinamico.querySelector('p');
            if (parrafoDinamico) {
                zonaContenidoDinamico.removeChild(parrafoDinamico);
                console.log('Ejercicio 3: Primer párrafo dinámico eliminado.');
            } else {
                console.log('Ejercicio 3: No hay párrafos para eliminar.');
            }
        }
    });

    // --- Ejercicio 4: Reemplazar un Elemento Existente ---
    var btnReemplazarDiv = document.getElementById('reemplazarDivEj4'); 
    btnReemplazarDiv.addEventListener('click', function() {
        var divViejo = document.getElementById('divAntiguo'); 
        if (divViejo) {
            var divNuevo = document.createElement('div');
            divNuevo.textContent = '¡Este es el DIV NUEVO! Reemplazó al anterior.';
            divNuevo.classList.add('p-4', 'bg-green-200', 'rounded', 'mb-4', 'font-bold', 'text-center');

            var padreDelDiv = divViejo.parentNode;
            if (padreDelDiv) {
                padreDelDiv.replaceChild(divNuevo, divViejo);
                console.log('Ejercicio 4: Div reemplazado exitosamente.');
                console.log('Ahora el div en el DOM es:', divNuevo);
            } else {
                console.log('Ejercicio 4: No se pudo encontrar el padre del div original.');
            }
        } else {
            console.log('Ejercicio 4: El div original ya no está presente para ser reemplazado.');
        }
    });

    // --- Ejercicio 5: Manejo de Eventos ---
    var btnClickMe = document.getElementById('botonClickMe'); 
    var btnRemoverEvento = document.getElementById('botonRemoverEvento');
    var estadoEventoTexto = document.getElementById('estadoDelEvento');

    function funcionClickMe() {
        mostrarModalConfirmacion("¡El botón 'Haz Clic Aquí' fue clickeado!", function() {
           
            console.log('Ejercicio 5: Se confirmó el clic en el botón.');
        });
    }

    // Añadir el evento inicial
    btnClickMe.addEventListener('click', funcionClickMe);
    console.log('Ejercicio 5: Evento de clic añadido al botón "Haz Clic Aquí".');

    // Quitar el evento
    btnRemoverEvento.addEventListener('click', function() {
        btnClickMe.removeEventListener('click', funcionClickMe);
        estadoEventoTexto.textContent = 'Estado: Evento REMOVIDO';
        estadoEventoTexto.style.color = 'red';
        btnRemoverEvento.disabled = true; // Para que no se pueda quitar dos veces
        console.log('Ejercicio 5: Evento de clic removido.');
    });

    // --- Ejercicio 6: Aplicación de Gestión de Tareas ---
    var inputTarea = document.getElementById('entradaTarea'); 
    var btnAgregarTarea = document.getElementById('botonAgregarTarea'); 
    var listaDeTareas = document.getElementById('listaDeTareas');
    var mensajeSinTareas = document.getElementById('mensajeSinTareas');

    btnAgregarTarea.addEventListener('click', function() {
        var textoTarea = inputTarea.value.trim();

        if (textoTarea !== '') {
            // Si hay tareas ocultamos el mensaje de no hay tareas
            mensajeSinTareas.style.display = 'none';

            // Crear el div para la tarea
            var divTarea = document.createElement('div');
            divTarea.classList.add('tarea-item', 'flex', 'items-center', 'justify-between', 'p-3', 'bg-blue-100', 'rounded-md', 'mb-2'); // Added Tailwind classes for styling

            //  el span para el texto de la tarea
            var spanTexto = document.createElement('span');
            spanTexto.classList.add('texto-tarea', 'flex-grow', 'mr-3');
            spanTexto.textContent = textoTarea;

            //  el div para las acciones (botones)
            var divAcciones = document.createElement('div');
            divAcciones.classList.add('tarea-acciones', 'flex', 'gap-2');

            // Botón para completar tarea
            var botonChequear = document.createElement('button');
            botonChequear.classList.add('icono-chequear', 'text-orange-500', 'hover:text-orange-700', 'text-xl');
            botonChequear.innerHTML = '<i class="far fa-circle"></i>';

            botonChequear.addEventListener('click', function() {
                divTarea.classList.toggle('completada');
                spanTexto.classList.toggle('line-through');
                spanTexto.classList.toggle('text-gray-500');
                if (divTarea.classList.contains('completada')) {
                    botonChequear.innerHTML = '<i class="fas fa-check-circle"></i>';
                    botonChequear.classList.remove('text-orange-500', 'hover:text-orange-700');
                    botonChequear.classList.add('text-green-500', 'hover:text-green-700');
                } else {
                    botonChequear.innerHTML = '<i class="far fa-circle"></i>';
                    botonChequear.classList.remove('text-green-500', 'hover:text-green-700');
                    botonChequear.classList.add('text-orange-500', 'hover:text-orange-700');
                }
            });

            // Botón para eliminar tarea
            var botonEliminar = document.createElement('button');
            botonEliminar.classList.add('icono-eliminar', 'text-red-500', 'hover:text-red-700', 'text-xl');
            botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Icono de bote de basura

            botonEliminar.addEventListener('click', function() {
                // Preguntar antes de eliminar
                mostrarModalConfirmacion('¿Seguro que quieres eliminar la tarea "' + textoTarea + '"?', function() {
                    divTarea.parentNode.removeChild(divTarea); // Eliminar la tarea
                    console.log('Tarea eliminada:', textoTarea);
                    // Si no quedan tareas, mostrar el mensaje de no hay tareas
                    if (listaDeTareas.querySelectorAll('.tarea-item').length === 0) { 
                        mensajeSinTareas.style.display = 'block';
                    }
                });
            });

            //  botones al div de acciones
            divAcciones.appendChild(botonChequear);
            divAcciones.appendChild(botonEliminar);

            //  texto y acciones al div de la tarea
            divTarea.appendChild(spanTexto);
            divTarea.appendChild(divAcciones);

            //  la tarea a la lista principal
            listaDeTareas.appendChild(divTarea);

            inputTarea.value = ''; // Limpiar el input después de agregar
        } else {
            console.log('El campo de tarea está vacío.');
        }
    });

    // Revisar si hay tareas al cargar para mostrar/ocultar el mensaje
    if (listaDeTareas.querySelectorAll('.tarea-item').length > 0) {
        mensajeSinTareas.style.display = 'none';
    } else {
        mensajeSinTareas.style.display = 'block';
    }

});
