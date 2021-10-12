function carregar () {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var mensagem = document.getElementById("mensagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 05 && hora < 12) {
        //BOM DIA!
        img.src = "manha.png"
        mensagem.innerHTML =`Bom dia!`
        document.body.style.background = "#B8860B"
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = "tarde.png"
        mensagem.innerHTML = `Boa Tarde!`
        document.body.style.background = "#A0522D"
    } else {
        // BOA NOITE!
        img.src = "noite.png"
        mensagem.innerHTML = `Boa Noite!`
        document.body.style.background = "#363636"
    }
}