function generarContrasena(length, opc) {
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';

    let caracteresDisponibles = '';

    if (opc.mayusculas) {
        caracteresDisponibles += mayusculas;
    }
    if (opc.minusculas) {
        caracteresDisponibles += minusculas;
    }
    if (opc.numeros) {
        caracteresDisponibles += numeros;
    }
    if (opc.simbolos) {
        caracteresDisponibles += simbolos;
    }

    if (caracteresDisponibles === '') {
        return 'Selecciona al menos una opción.';
    }

    let contrasena = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * caracteresDisponibles.length);
        contrasena += caracteresDisponibles[randomIndex];
    }

    return contrasena;
}

document.getElementById("passwordForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario y recarga de la página
    console.log(21312)
    const length = parseInt(document.getElementById("length").value) || 15; // Longitud predeterminada de 15 si no se ingresa
    const mayusculas = document.getElementById("mayus").checked;
    const minusculas = document.getElementById("minus").checked;
    const numeros = document.getElementById("numeros").checked;
    const simbolos = document.getElementById("simbolos").checked;

    const opciones = { mayusculas, minusculas, numeros, simbolos };

    const nuevaContrasena = generarContrasena(length, opciones);
    document.getElementById("passwordOutput").innerText = nuevaContrasena;
});
