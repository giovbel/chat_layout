'use script'

const contatos = [
    {
        imagem: 'basil.jpg',
        nome: 'Basil 🌻!',
        notificacao: '1',
        mensagem: 'Meus pensamentos te seguirão em seus sonhos',
        logo: 'logo-telegram.webp',
        tempo: 'Há 3 anos',
        iconeAtendente: 'iconeAtendente.png',
        atendente: 'Manjeiricão'
    },
    {
        imagem: 'kel.jpg',
        nome: 'Kel 🌵 !',
        notificacao: '2',
        mensagem: 'é uma pedra de estimação... Ele não é incrível?',
        logo: 'logo-instagram.webp',
        tempo: 'Há 3 anos',
        iconeAtendente: 'iconeAtendente.png',
        atendente: 'Hector'
    },
    {
        imagem: 'aubrey.jpg',
        nome: 'Aubrey 🌸!',
        notificacao: '3',
        mensagem: 'KEL ESTÁ SENDO MAL COMIGO DE NOVO!!',
        logo: 'logo-whatsapp.png',
        tempo: 'Há 3 anos',
        iconeAtendente: 'iconeAtendente.png',
        atendente: 'Kel'
    },
    {
        imagem: 'mari.jpg',
        nome: 'Mari 💐 !',
        notificacao: '5',
        mensagem: 'Você deveria sorrir mais! Sempre gostei do seu sorriso',
        logo: 'logo-instagram.webp',
        tempo: 'Há 3 anos',
        iconeAtendente: 'iconeAtendente.png',
        atendente: 'Sunny'
    },
    {
        imagem: 'hero.jpg',
        nome: 'Hero 🌹 !',
        notificacao: '6',
        mensagem: 'Ei, SUNNY... Posso cutucar seu cérebro por um minuto?',
        logo: 'logo-telegram.webp',
        tempo: 'Há 3 anos',
        iconeAtendente: 'iconeAtendente.png',
        atendente: 'Mari'
    }
]

function criarCards(contatos) {
    const container = document.getElementById ('card-container')

    const card = document.createElement('div')
    card.classList.add('card')


    
    const imagem = document.createElement('img')
    imagem.classList.add('imagem')
    imagem.src = `./img/${contatos.imagem}`
    imagem.alt = contatos.imagem

    const informations = document.createElement('div')
    informations.classList.add('informations')
    
    const nome = document.createElement('h3')
    nome.textContent = contatos.nome

    const notificacao = document.createElement('notification')
    notificacao.classList.add('notification')
    notificacao.textContent = contatos.notificacao

    const content = document.createElement ('div')
    content.classList.add('content')

    const mensagem = document.createElement('p')
    mensagem.textContent = contatos.mensagem

    const logo = document.createElement('img')
    logo.classList.add('logo')
    logo.src = `./logos/${contatos.logo}`
    logo.alt = contatos.logo

    const tempo = document.createElement('div')
    tempo.classList.add('time')
    tempo.textContent = contatos.tempo

    const contact = document.createElement ('div')
    contact.classList.add('contact')
    contact.src = `./img/${contatos.logo}`

    const iconeAtendente = document.createElement('img')
    iconeAtendente.classList.add('iconeAtendente')
    iconeAtendente.src = `./img/${contatos.iconeAtendente}`
    iconeAtendente.alt = contatos.iconeAtendente

    const atendente = document.createElement('div')
    atendente.classList.add('atendente')
    atendente.textContent = contatos.atendente

    card.replaceChildren(imagem, informations, logo)
    informations.replaceChildren(nome, notificacao, content, tempo, contact)
    content.replaceChildren(mensagem)
    contact.replaceChildren(iconeAtendente, atendente)
    container.appendChild(card)
}

contatos.forEach(criarCards)