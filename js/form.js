function revisar(elemento) {
    if (elemento.value==""){
        elemento.className='error';
    } else {
        elemento.className='form-input';
    }
}

function revisaremail(elemento) {
    if (elemento.value!=""){
        var dato = elemento.value;
        var expresion = /^([a-zA-Z0-9_.-])+@(([a-zA-z0-9-])+.)+([a-zA-Z0-9-]{2,4})+$/;
        if (!expresion.test(dato)) {
            elemento.className='error';
        } else {
        elemento.className='form-input';
        }
	}
}


function validar(form) {
  if(form.nombre.value=="") { //Si este campo está vacío
    alert('Porfavor Ingresa tu nombre'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
  
  if(form.email.value=="") { //Si este campo está vacío
    alert('Porfavor Ingresa tu Correo Electronico'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
  
  if(form.mensaje.value=="") { //Si este campo está vacío
    alert('Porfavor Ingresa tu Mensaje'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }
 
  return true; // Si esta todo bien, devolvemos Ok, positivo
}