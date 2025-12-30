(function () {
    const inputText = document.querySelector("#inputText")
    const calculadora = {
        start() {
            document.addEventListener("click", function (click) {
                if (click.target.classList.contains("btn")) {
                    const btn = click.target.innerText
                    inputText.value += btn
                }
            })
            this.clear()
            this.resultado()
            this.del()
        },

        clear() {
            document.addEventListener("click", function (click) {
                if (click.target.classList.contains("clear")) {
                    inputText.value = ""
                }
            })
        },

        del() {
            document.addEventListener("click", function (click) {
                if (click.target.classList.contains("del")) {
                    inputText.value = inputText.value.slice(0, -1)
                }
            })
        },

        resultado() {
            document.addEventListener("click", function (click) {
                if (click.target.classList.contains("res")) {
                    if (inputText.value === "") {
                        return
                    } else {

                        const expressaoValida = /^[0-9+\-*/.]+$/
                        if (expressaoValida) {

                            const valor = inputText.value
                            const resultado = eval(valor)

                            //Colocando a frase carregando e a nota 10
                            const time = setTimeout(function () {
                                inputText.value = resultado
                            }, 2000)



                            inputText.value = "Carregando..."
                        }
                    }



                }
            })
        }


    }
    calculadora.start()

    // console.log(inputText)

})()