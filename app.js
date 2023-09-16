'use script'

const contatos = [
    {
        imagem: 'haerin.jpg',
        nome: 'Haerin !',
        notificacao: '4',
        mensagem: 'I wanna tell you but im super shy !',
        logo: 'logo-telegram.webp',
        tempo: 'Há 30 minutos',
        iconeAtendente: 'iconeAtendente.png',
        atendente: 'Bunnies'
    },
    {
        imagem: 'danielle.jpg',
        nome: 'Danielle !',
        notificacao: '2',
        mensagem: '지원이가 여친이랑 헤어진 그날 !!',
        logo: 'logo-instagram.webp',
        tempo: 'Há 25 minutos',
        iconeAtendente: 'iconeAtendente.png',
        atendente: 'Minji'
    },
    {
        imagem: 'hanni.jpg',
        nome: 'Hanni !',
        notificacao: '3',
        mensagem: 'Heard him say. . .',
        logo: 'logo-whatsapp.png',
        tempo: 'Há 20 minutos',
        iconeAtendente: 'iconeAtendente.png',
        atendente: 'Haerin'
    },
    {
        imagem: 'minji.jpg',
        nome: 'Minji !',
        notificacao: '5',
        mensagem: 'Hi, its me again, Im back. . .',
        logo: 'logo-instagram.webp',
        tempo: 'Há 18 minutos',
        iconeAtendente: 'iconeAtendente.png',
        atendente: 'ASAP'
    },
    {
        imagem: 'hyein.jpg',
        nome: 'Hyein !',
        notificacao: '6',
        mensagem: 'I got no time to lose, 내 길었. . .',
        logo: 'logo-telegram.webp',
        tempo: 'Há 15 minutos',
        iconeAtendente: 'iconeAtendente.png',
        atendente: 'Ditto'
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