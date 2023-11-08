function carregar() {
    var msg = window.document.getElementById("msg")
    var ing = window.document.getElementById("imagem")
    //var foto = window.document.getElementById("foto")
    var data = new Date()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas. <br>`
    if ( hora >= 0 && hora < 12 ) {
        msg.innerHTML += "Bom dia!"
        ing.src = "1.png"
        document.body.style.background = "rgb(78, 198, 226)"
    } else if ( hora > 11 && hora < 18 ) {
        msg.innerHTML += "Boa tarde!"
        ing.src = "2.png"
        document.body.style.background = "rgb(235, 220, 55)"
    } else {
        msg.innerHTML += "Boa noite!"
        ing.src = "3.png"
        document.body.style.background = "brown"
    }

}
