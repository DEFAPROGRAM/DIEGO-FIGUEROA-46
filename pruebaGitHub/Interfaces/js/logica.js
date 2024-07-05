//console.log('Logica conectada');
// Simular una base de datos de usuarios
let usuarios = [
  { username: "Admin", password: "1234", falla: 0 },
  { username: "Oskr", password: "Profe",  falla: 0 },
  { username: "Defa", password: "Aprendiz",  falla: 0 },
  // Agrega más usuarios aquí
];

function pruebaBoton() {
  let user = document.getElementById('user').value;
  let pw = document.getElementById('pw').value;

  // Recorrer la lista de usuarios y verificar las credenciales
  let usuario = null;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].username === user) {
      usuario = usuarios[i];
    break;
    }
  }
if (usuario) {
  if (usuario.falla >= 3) {
    alert('Usuario bloqueado debido a múltiples intentos fallidos');
  } else if (usuario.password === pw) { 
    // Restablecer los intentos fallidos en caso de éxito
    usuario.falla = 0; 
    // Redirigir a la página Home.html y pasar el nombre de usuario como variable
    window.open('../views/Home.html?user=' + usuario.username, '_self');
  } else {
    usuario.falla+= 1;
      if (usuario.falla >= 3) {
        alert('Usuario bloqueado debido a múltiples intentos fallidos');
      } else {
    alert('Error al escribir Usuario o Contraseña');
  }
}
} else {
  alert('Este Usuario no Existe');
}
}