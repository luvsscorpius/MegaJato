// funcoes auxiliares

const seleciona = (elemento) => document.querySelector(elemento)


// Função para mudar o menu 

const list = document.querySelectorAll('.list-inicio, .list-clientes, .list-service, .list-agenda, .list-historico')

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'))
    this.classList.add('active')
}

list.forEach((item) =>
    item.addEventListener('click', activeLink))

// funcao para ativar o active quando eu clicar no icone 

const abrirMenu = () => {
    const mostrarMenu = document.querySelector('.abrir-menu').addEventListener('click', (event) => {
        event.preventDefault()
        console.log('Abri')
        const nav = document.querySelector('.navigation')
        const h1 = document.querySelector('.title-h1 h1')
        if (nav.style.width == '70px') {
            nav.style.width = '200px'
            h1.innerHTML = 'MegaJato'
        } else {
            nav.style.width = '70px'
            h1.innerHTML = ''
        }

    })
}

// funcao para trocar as abas 

const home = () => {
    const inicio = document.querySelector('.list-inicio').addEventListener('click', () => {
        console.log('Cliquei na pagina inicial')
        const paginaInicial = document.querySelector('.home')
        if (paginaInicial.style.display = 'none') {
            seleciona('.home').style.display = 'flex'
            seleciona('.aba-clientes').style.display = 'none'
        }
    })
}

const clientes = () => {
    const clientes = document.querySelector('.list-clientes').addEventListener('click', () => {
        console.log('Cliquei na pagina clientes')
        const paginaClientes = document.querySelector('.aba-clientes')
        if (paginaClientes.style.display = 'none') {
            seleciona('.home').style.display = 'none'
            seleciona('.aba-clientes').style.display = 'flex'
        }
    })
}

clientes()
home()
abrirMenu()