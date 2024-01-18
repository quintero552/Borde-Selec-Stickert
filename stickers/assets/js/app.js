const primerCampo = document.querySelector('#campo1')
const segundoCampo = document.querySelector('#campo2')
const tercerCampo = document.querySelector('#campo3')
const botones = document.querySelector('#boton')
const parrafito = document.querySelector('#comentario')

let valor = 10


botones.addEventListener('click', () =>{
    let sumatoria = Number(primerCampo.value) + Number(segundoCampo.value) + Number(tercerCampo.value)
    
    if (sumatoria <= 0) {
        console.log(primerCampo)
        parrafito.innerHTML = `Ingresa un numero valido`
    }else if (sumatoria <= valor) {
        parrafito.innerHTML = `llevas ${sumatoria} stickers`
        console.log(`Llevas ${sumatoria} stickers`)
    }else{
        parrafito.innerHTML = `Llevas demasiados stickers el maximo total es 10`
        console.log('Llevas demasiados stickers el maximo total es 10')
    }
})




/*

if (primerCampo.value <= valor) {
        parrafito.innerHTML = `llevas ${primerCampo.value} stickers`
        console.log(`CONSOLE ${primerCampo.value}`)
    }else if(segundoCampo.value <= valor){
        parrafito.innerHTML = `llevas ${segundoCampo.value} +  ${primerCampo.value} stickers`
        console.log(`CONSOLE ${primerCampo.value}`)
    }
*/