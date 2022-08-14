export default {
    // Máscara para o CPF

    mascaraCPF(input) {

        input.addEventListener('keypress', (evento) => {
            // verificando se o valor digitado pelo usuário é uma letra
            let valorDigitado = evento.key;

            if (isNaN(valorDigitado)) {

                evento.preventDefault()

            }

            // comprimento = 14 dígitos
            let inputLength = input.value.length;

            // três dígitos . três digitos . três dígitos - dois dígitos
            if (inputLength === 3 || inputLength === 7) {

                input.value += '.'

            } else if (inputLength === 11) {

                input.value += '-'

            }
        });
    },

    mascaraTelefone(input) {

        input.addEventListener('keypress', (evento) => {
            // verificando se o valor digitado pelo usuário é uma letra
            let valorDigitado = evento.key;
        
            if (isNaN(valorDigitado)) {
        
                evento.preventDefault();
        
            }
            
            // comprimento = 14 dígitos
            let inputLength = input.value.length
        
            // ( dois dígitos ) cinco dígitos - quatro dígitos
            if(inputLength == 0) {
        
                input.value += '('
        
            } else if(inputLength == 3) {
        
                input.value += ')'
        
            } else if(inputLength == 9) {
                
                input.value += '-'
        
            }
        
         });
    }
}