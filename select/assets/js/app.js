const opcion = document.querySelector('#seleccionador');
const opcion1 = document.querySelector('#seleccionador1');
const opcion2 = document.querySelector('#seleccionador2');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#texto');




boton.addEventListener('click', () =>{
    const resultado1 = (opcion.value === '9' && opcion1.value === '1' && opcion2.value === '1') ? true : false;
    const resultado2 = (opcion.value === '7' && opcion1.value === '1' && opcion2.value === '4') ? true : false;
    
    if (resultado1 ) {               
        resultado.innerHTML = `Password 1 Correcto`
        console.log('Lo Has Logrado es un ' + resultado1)
    }else if (resultado2){
        resultado.innerHTML = `Password 2 Correcto`
        console.log('Lo Has Logrado es un ' + resultado2)
    }else{
        resultado.innerHTML = 'Password Incorrecto'
        console.log(' Password Incorrecto, Intentalo de nuevo ')
    }    
})

































/*


const clave1 = ['9', '1', '1'];
const clave2 = ['7', '1', '4'];


boton.addEventListener('click', () =>{
    const resultado1 = (opcion.value === '9' && opcion1.value === '1' && opcion2.value === '1') ? true : false;
    const resultado2 = (opcion.value === '7' && opcion1.value === '1' && opcion2.value === '4') ? true : false;
    
    if ( clave1.includes(opcion.value) && clave1.includes(opcion1.value) && clave1.includes(opcion2.value)) {               
        resultado.innerHTML = `Password 1 Correcto`
        console.log('Lo Has Logrado es un ' + opcion.value)
    }else if (clave2.includes(opcion.value) && clave2.includes(opcion1.value) && clave2.includes(opcion2.value)){
        resultado.innerHTML = `Password 2 Correcto`
        console.log('Lo Has Logrado es un ' + opcion)
    }else{
        resultado.innerHTML = 'Intentalo de nuevo'
        console.log('Intenta de nuevo  ' + opcion.value)
    }    
})


*/

//console.log(clave1.includes('8'));














//const pass = 'campo9' + 'campo1' + 'campo1'
//const resultados = opcion.value === 'campo9' && opcion1.value === 'campo1' && opcion2.value === 'campo1'

//const pass = '9' + '1' + '1'
//const sumatoria = opcion.value 

/*
if (campo.value == 'uno') {               
    parrafito.innerHTML = 'Lo has logrado'
}else{
    parrafito.innerHTML = 'No eres el dueño de este sitio web, no puedes ver esto'
}*/
