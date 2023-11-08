function ver() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        var gen = ``
        if (fsex[0].checked) {
            gen = "homem"
            if (idade < 12) {
                //cri
                img.setAttribute("src", "1a.png")
            } else if (idade < 18) {
                //ado
                img.setAttribute("src", "2a.png")
            } else if (idade < 35) {
                //jov
                img.setAttribute("src", "3a.png")
            } else if (idade < 60) {
                //sen
                img.setAttribute("src", "4a.png")
            } else {
                //ido
                img.setAttribute("src", "5a.png")
            }
        } else {
            gen = "mulher"
            if (idade < 12) {
                //cri
                img.setAttribute("src", "1b.png")
            } else if (idade < 18) {
                //ado
                img.setAttribute("src", "2b.png")
            } else if (idade < 35) {
                //jov
                img.setAttribute("src", "3b.png")
            } else if (idade < 60) {
                //sen
                img.setAttribute("src", "4b.png")
            } else {
                //ido
                img.setAttribute("src", "5b.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Presumimos ${gen} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}