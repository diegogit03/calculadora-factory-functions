function criaCalculadora(){
    return {

        display: document.querySelector('.display'),

        start(){
            alert('foi iniciado!')
        },

        clickButtons(){
            document.addEventListener('click', function(event){
                const element = event.el;
            });
        },

    };
};

const calculadora = criaCalculadora();

calculadora.start();

