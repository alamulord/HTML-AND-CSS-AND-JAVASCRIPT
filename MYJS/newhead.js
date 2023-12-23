const showMenu = (navbarId, barsId) => {
    const navbar = document.getElementById(navbarId),
    nav = document.getElementById(barsId)

    navbar.addEventListener('click', ()=>{
        // add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // add show icon to show and hide menu icon
        navbar.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle' , 'nav-menu')