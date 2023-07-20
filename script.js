const RESULTADO1 = document.getElementById("resultado1");
const RESULTADO2 = document.getElementById("resultado2");
const RESULTADO3 = document.getElementById("resultado3");
const TITULOSC = document.getElementById("titulosc");
const TITULOHS = document.getElementById("titulohs");
const BUTON = document.getElementById("calcular");
const INPUT = document.getElementById("peso");
const ERROR = document.getElementById("error");
const CONTENIDO1 = document.getElementById("contenido1")
const CONTENIDO2 = document.getElementById("contenido2")

BUTON.addEventListener("click",()=>{
    let peso = INPUT.value;

        if(peso === ""){
           ERROR.style.display = "block";
        } else if (peso > 30){
            let sc = SuperficieCorporal(peso);
            TITULOSC.innerHTML= "Método de Superficie Corporal, su volumen diario es:";
            TITULOHS.style.display= "none";
            TITULOSC.style.display= "block";

            RESULTADO1.innerHTML= "1 -  " + sc[0] + " cc";
            RESULTADO1.style.display= "block";

            RESULTADO2.innerHTML= "2 -  " + sc[1] + " cc";
            RESULTADO2.style.display= "block";

            RESULTADO3.style.display= "none";
            ERROR.style.display= "none";

            CONTENIDO2.classList.remove("oculto")
            CONTENIDO1.classList.add("oculto")

        } else { 
            let hc = HollidaySegar(peso);

            TITULOHS.innerHTML= "Método Holliday-Segar, los resultados son:";
            TITULOHS.style.display= "block"; 

            RESULTADO1.innerHTML= " Volumen diario:    " + hc[0] + " cc";
            RESULTADO1.style.display= "block";

            RESULTADO2.innerHTML= " Mantenimiento:    " + hc[1] + " cc/h";
            RESULTADO2.style.display= "block";

            RESULTADO3.innerHTML= " Mantenimiento + M/2:    " + hc[2] + " cc/h"
            RESULTADO3.style.display= "block";
            ERROR.style.display= "none";

            CONTENIDO1.classList.remove("oculto")
            CONTENIDO2.classList.add("oculto")
        }
});

function SuperficieCorporal(peso){
    let SuperficieCorporal = ((peso * 4) + 7) / (peso + 90);
    return [(SuperficieCorporal*1500).toFixed(2), (SuperficieCorporal*2000).toFixed(2)]
}

    
function HollidaySegar(peso){
    let resultado = 0;
    if(peso <= 10){
        resultado = (peso * 100)
    } else if(peso >10 && peso <= 20) {
        resultado = (((peso - 10)*50) + 1000 )
    } else {
        resultado = (((peso - 20)*20) + 1500)
    } 
    return [resultado.toFixed(0), (resultado / 24).toFixed(0), ((resultado / 24) *1.5).toFixed(0)]
}