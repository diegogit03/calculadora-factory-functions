function criaCalculadora(){
    return {

        display: document.querySelector('.display'),

        start(){
            this.clickButtons();
        },

        clickButtons(){
            document.addEventListener('click', (event)=>{
                const element = event.target;

                if(element.classList.contains('btn-num')){
                    this.btnToDisplay(element.innerHTML);
                };
            });
        },

        btnToDisplay(value){
            this.display.value += value
        },

    };
};

const calculadora = criaCalculadora();

calculadora.start();

