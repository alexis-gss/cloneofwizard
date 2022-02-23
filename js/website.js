window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
    let btns = document.querySelectorAll('.navLinks__itemLinks')
    let  wrapper = document.querySelector('.wrapper')
    btns[0].style.backgroundColor = "var(--color1)"
    let btnMenu = document.querySelector(".btnMenu")
    let btnMenuActivated = document.querySelector(".btnMenuActivated")
    let navTelephone = document.querySelector(".navTelephone")
    let liTelephone = document.querySelectorAll(".liTelephone")
    let filtre = document.querySelector(".filtre")

    btnMenu.addEventListener("click", function(){
        navTelephone.classList.add("navTelephoneActivated")
        btnMenu.style.display = "none"
        btnMenuActivated.style.display = "block"
        filtre.style.display = "block"
    })
    
    let handler__menuDesactivated = function(){
        navTelephone.classList.remove("navTelephoneActivated")
        btnMenuActivated.style.display = "none"
        filtre.style.display = "none"
        if (window.matchMedia("(max-width: 1250px)").matches) {
            btnMenu.style.display = "block"
        }
        else{
            btnMenu.style.display = "none"
        }
    }

    filtre.addEventListener("click", handler__menuDesactivated)
    btnMenuActivated.addEventListener("click", handler__menuDesactivated)
    for(i = 0 ; i < liTelephone.length ; i ++){
        liTelephone[i].addEventListener("click", handler__menuDesactivated)
    }

    let handler__move = function(e){
        for (let i = 0; i < btns.length ; i ++) {
        btns[i].style.backgroundColor = "var(--color4)"
    }
        let monbtn = e.target
        let pos = monbtn.getAttribute("data-pos")
        wrapper.style.transform = "translateX("+ pos +")"
        monbtn.style.backgroundColor = "var(--color1)"
    }

    btns.forEach(function(btn){
        btn.addEventListener("click", handler__move)
    })
})