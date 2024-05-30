//UI ELEMENTS

const aboutUsEl = document.getElementById('aboutUs')
const recentSaleEl = document.getElementById('recentSale')
const ContactEl = document.getElementById('Contact')
const locationEl = document.getElementById('location')
const clientsEl = document.getElementById('clients')

let click = true

document.getElementById('hamburger').addEventListener('click', (e) => {
    if(click){
        renderHamburger()
        click = false
    }else {
        notRenderHamburger()
        click = true
    }
    
})


function renderHamburger(){
    document.getElementById('list').style.display = `flex`
}

function notRenderHamburger(){
    document.getElementById('list').style.display = `none`
}

function scrollFunctionOne(){
    aboutUsEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionClients(){
    clientsEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
}

function scrollFunctionTwo(){
    recentSaleEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionThree(){
    ContactEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionFour(){
    locationEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}