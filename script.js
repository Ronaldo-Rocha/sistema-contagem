function contar(){

    var inicio = document.querySelector('input#ini')
    var fim = document.querySelector('input#fim')
    var pass = document.querySelector('input#pass')
    var res = document.querySelector('div#resu')

    if(inicio.value.length == 0 || fim.value.length == 0 || pass.value.length == 0 ){
        window.alert("[ERRO] Campo vazio!")
        res.innerHTML = "Preparando a contagem"
    }else{
       res.innerHTML = 'Contando: <br> '
       var i = Number(inicio.value)
       var f = Number(fim.value)
       var p = Number(pass.value)

       if(p<= 0){
           window.alert('Passo inválido! Considerando PASSO 1')
           p = 1
       }

        if(i < f){
            for(var c = i; c <= f; c+= p){
                res.innerHTML += `&#128284 ${c} `
            }
            res.innerHTML += `&#128282`
        }else{
            for(var c = i; c >= f;c-= p){
            res.innerHTML+= `&#128281 ${c}  `
            }
            res.innerHTML+= `&#128282`
        }
    }
    
}