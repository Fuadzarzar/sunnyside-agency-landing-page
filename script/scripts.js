const hambicon = document.querySelector("#content-hamb-menu")
const closeMenu = document.querySelector("#close-menu")
const menu = document.querySelector("#menu-hamb")


    hambicon.addEventListener('click', function(){
        menu.style.display = "block"
        menu.style.animationName = "slideIn"
        menu.style.animationPlayState = "play"
        menu.style.right = "0"
    })


    closeMenu.addEventListener('click', function(){
        menu.style.animationName = "slideOut"
        menu.style.animationPlayState = "play"
        menu.style.right = "-500px"
    })
