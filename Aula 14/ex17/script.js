function tabuar() {
    var ent = document.querySelector("input#tu")
    var sai = document.querySelector("table#tc")
    var nec = 1
    var ent = Number(ent.value)

    while (ent*nec<=ent*12) {
        sai.innerHTML += `${ent}x${nec}=${ent*nec} <br>`
        nec++
    }
    
}