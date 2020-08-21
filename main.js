function criaCalculadora(){
    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        
        start(){
            this.clickButtons();
        },
        
        clickButtons(){
            document.addEventListener('click', (event)=>{
                const element = event.target;
                
                if(element.classList.contains('btn-num')){
                    this.btnToDisplay(element.innerHTML);
                };
                
                if(element.classList.contains('btn-clear')){
                    this.clearDisplay();
                };
                
                if(element.classList.contains('btn-del')){
                    this.deleteOne();
                };
            });
        },
        
        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
        },

        btnToDisplay(value){
            this.display.value += value
        },

    };
};

const calculadora = criaCalculadora();

calculadora.start();

