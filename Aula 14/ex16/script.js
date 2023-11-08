function contar() {
    var ini = document.querySelector("input#ti")
    var pul = document.querySelector("input#tp")
    var fim = document.querySelector("input#tf")
    var con = document.querySelector("div#tc")
    var ini = Number(ini.value)
    var pul = Number(pul.value)
    var fim = Number(fim.value)
    //if (ini.value.langh <= 0 )
    con.innerHTML = ini
    while (ini+pul<=fim) {
        con.innerHTML += `-${ini+pul}`
        ini = ini+pul
    }
    
}