//ver imagenes
const lightbox = document.getElementById('lightbox');
const imgGrande = document.getElementById('imgGrande');
const cerrar = document.getElementById('cerrar');

document.querySelectorAll('.foto img').forEach(img => {
  img.addEventListener('click', () => {
    imgGrande.src = img.src;
    imgGrande.alt = img.alt;
    lightbox.style.display = 'flex';
  });
});

cerrar.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});


//formulario
document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.getElementById('form');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();

        const nombreValido = validarNombre();
        const mailValido = validarMail();

        if(nombreValido && mailValido){
            formulario.reset();
        }
    })

    function validarNombre(){
        const str = document.getElementById('nombre').value.trim();
        const error = document.getElementById('errorNombre');
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;

        if (str === ''){
            error.textContent = 'Es obligatorio';
            return false;
        } else if (str.length < 3){
            error.textContent = 'Debe tener al menos 3 caracteres';
            return false;
        } else if (!regex.test(str)){
            error.textContent = 'Debe tener un formato valido (solo letras)';
            return false;
        } else{
            error.textContent = '';
            return true;
        }
    }


    function validarMail(){
        const str = document.getElementById('email').value.trim();
        const error = document.getElementById('errorMail');
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


        if (str === ''){
            error.textContent = 'Es obligatorio';
            return false;
        } else if (str.length < 3){
            error.textContent = 'Debe tener al menos 3 caracteres';
            return false;
        } else if (!regex.test(str)){
            error.textContent = 'Debe tener un formato valido (nombre@gmail.com)';
            return false;
        } else{
            error.textContent = '';
            return true;
        }
    }


    document.getElementById('nombre').addEventListener('input', validarNombre);
    document.getElementById('nombre').addEventListener('blur', validarNombre);

    document.getElementById('email').addEventListener('blur', validarMail);
})