
const progresso = document.getElementById('progresso')
const ante = document.getElementById('anterior')
const prox = document.getElementById('proximo')
const circulo = document.querySelectorAll('.cprog')

let currentActive = 1 

prox.addEventListener('click', () => {
    currentActive++

    if(currentActive > circulo.length){
        currentActive = circulo.length

    }

    update()

})

ante.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1

    }

    update()

})

function update() {
    circulo.forEach((cprog, idx) => {
        if(idx < currentActive) {
            cprog.classList.add('active')
        } else {
            cprog.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progresso.style.width = (actives.length - 1) / (circulo.length - 1) * 100 + '%'

    if(currentActive === 1) {
        ante.disabled = true
    } else if(currentActive === circulo.length) {
        prox.disabled = true
    } else {
        ante.disabled = false
        prox.disabled = false
    }
}

