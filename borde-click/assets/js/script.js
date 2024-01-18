const borders = document.querySelector('img')

//Se crea una funcion para que al darle click me cambie de color

borders.addEventListener('click', () =>{
    borders.classList.toggle('cambia')
    console.log(borders)
})

