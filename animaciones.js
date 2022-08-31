const maquina1 = document.getElementById('presentacion-title')
const maquina2 = document.getElementById('presentacion-text')
const maquina3 = document.getElementById('presentacion-text2')

const maquinaEscribir1 = (text1 = '', tiempo1 = 200, etiqueta1 = '') => {
    let arrayCaracteres1 = text1.split('')
    etiqueta1.innerHTML = ''
    let cont1 = 0
    let escribir1 = setInterval(function(){
        etiqueta1.innerHTML += arrayCaracteres1[cont1]
        cont1++
        if(cont1 === arrayCaracteres1.length){
            clearInterval(escribir1)
        }

    },tiempo1)
    
};

maquinaEscribir1("Hello I'm Joaquin",100, maquina1);

setTimeout(() => {
    maquinaEscribir1("Full Stack Developer", 70, maquina2)
},1800);

setTimeout(() => {
    maquinaEscribir1("Specialized in Front End", 70, maquina3)
},3500);
