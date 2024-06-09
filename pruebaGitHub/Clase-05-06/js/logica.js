console.log('Logica conectada');
// Simular una base de datos de usuarios
let usuarios = [
  { username: "Admin", password: "1234" },
  { username: "Oskr", password: "Profe" },
  { username: "Defa", password: "Aprendiz" },
  // Agrega más usuarios aquí
];

function pruebaBoton() {
  let user = document.getElementById('user').value;
  let pw = document.getElementById('pw').value;

  // Recorrer la lista de usuarios y verificar las credenciales
  let usuario = null;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].username === user && usuarios[i].password === pw) {
      usuario = usuarios[i];
      break;
    }
  }

  if (usuario) {
    // Redirigir a la página Home.html y pasar el nombre de usuario como variable
    window.open('../pruebaGitHub/Clase-05-06/pages/Home.html?user=' + usuario.username, '_self');
  } else {
    alert('Error al escribir Usuario o Contraseña');
  }
}