
/*---CONTAINER PRINCIPLAES--*/
const containerNumero=document.getElementById("containerNumero") 
const containerPersona=document.getElementById("containerPersona")
const containerEquipo=document.getElementById("containerEquipo")

/*---CONTAINER SECUNDARIOS--- */
const lotteryNumber=document.getElementById("lotteryNumber")
const lotteryPerson=document.getElementById("lotteryPerson")
const lotteryTeam=document.getElementById("lotteryTeam")

 /*---DISPLAY DE TARJETAS--- */

 containerNumero.addEventListener("click", ()=>{
    containerNumero.style.display="none"
    containerEquipo.style.display="none"
    containerPersona.style.display="none"
    lotteryNumber.style.display="flex"
    
 })

 containerPersona.addEventListener("click", ()=>{
    containerNumero.style.display="none"
    containerEquipo.style.display="none"
    containerPersona.style.display="none"
    lotteryPerson.style.display="flex"
 })

 containerEquipo.addEventListener("click",()=>{
    containerNumero.style.display="none"
    containerEquipo.style.display="none"
    containerPersona.style.display="none"
    lotteryTeam.style.display="flex"
 })


 /*---BOTON DE INICIO-- */
 const buttonInicio=document.getElementById("buttonInicio");
buttonInicio.addEventListener("click", ()=>{
    containerNumero.style.display="flex"
    containerEquipo.style.display="flex"
    containerPersona.style.display="flex"
    lotteryTeam.style.display="none"
    lotteryNumber.style.display="none"
    lotteryPerson.style.display="none"
    containerEquiposSorteados.style.display="none"
})


/*FUNCION PARA SORTEAR NUMERO*/

const primerNumero= document.getElementById("primerNumero");
const segundoNumero=document.getElementById("segundoNumero");
const formNumber=document.getElementById("formNumber");


formNumber.addEventListener("submit", (e)=>{
    e.preventDefault();
     
    if(primerNumero.value>segundoNumero.value){
      
      Swal.fire({
         icon: 'warning',
         title: 'Numeros invalidos',
         text: 'Por favor digite otro rango',
         showConfirmButton: false,
         color:"white",
         background:"black",
         timer:1800
         
       })
       formNumber.reset();
    }else
    
    var cantidad = document.getElementById("cantidad");
    var value = cantidad.value;
    var text = cantidad.options[cantidad.selectedIndex].text;
    
     
    function generarNumero(min, max) {
      min = Math.ceil(primerNumero.value);
      max = Math.floor(segundoNumero.value);
      numeroAzar = Math.floor(Math.random() * (max - min + 1) + min);
      return numeroAzar;
    }

   const numerosSorteados=[]

    for(var i=0; i<text ; i++){
      generarNumero();
      numerosSorteados.push(numeroAzar);
      console.log(numerosSorteados)
    }
   
   Swal.fire({
      title: 'Numeros sorteados '+ text,
      text: 'Numeros salidos ' + numerosSorteados,
      color:"white",
      background:"black",
      
    })
    console.log("el primer numero es "+ primerNumero.value + "y el segudno es "+ segundoNumero.value)
    formNumber.reset();

})



/*---------SORTEAMOS EQUIPOS---- */

const containerPersonaIngresada = document.getElementById("containerPersonaIngresada");
const containerEquipoIngresado = document.getElementById("containerEquipoIngresado");
const formLotteryTeam = document.getElementById("formLotteryTeam")
const formLotteryTeam2 = document.getElementById("formLotteryTeam2")
const sortearEquipo = document.getElementById("sortearEquipo")
const labelParticipante = document.getElementById("labelParticipante")
const labelEquipo = document.getElementById("labelEquipo")
const containerEquiposSorteados= document.getElementById("containerEquiposSorteados")
const personasSorteadas = document.getElementById("personasSorteadas")
const equiposSorteados = document.getElementById("equiposSorteados")

containerEquiposSorteados.style.display="none"




/*--ARRAY PERSONAS--- */

const arrayPersonas=[]

formLotteryTeam.addEventListener("submit", (e)=>{
   e.preventDefault()
  
   arrayPersonas.push(containerPersonaIngresada.value)
   labelParticipante.style.background="green";
   labelParticipante.innerHTML="Añadido"


   function alertAdd(){ 
      labelParticipante.style.background="#e3004b"
      labelParticipante.innerHTML="Participantes"
   } 
   setTimeout(alertAdd, 900);

   
      
   
   
   formLotteryTeam.reset(); 
    

   
   

})


 /*--ARRAY EQUIPOS--- */
const arrayEquipos=[]

formLotteryTeam2.addEventListener("submit", (e)=>{
  e.preventDefault()
  
  labelEquipo.style.background="green";
  labelEquipo.innerHTML="Añadido"
  function alertAdd(){ 
   labelEquipo.style.background="#e3004b"
   labelEquipo.innerHTML="Equipos"
} 
setTimeout(alertAdd, 1000);

  arrayEquipos.push(containerEquipoIngresado.value)
  
  formLotteryTeam2.reset();
})



sortearEquipo.addEventListener("click", ()=>{

   
  
   if ( arrayPersonas.length<=1 || arrayEquipos<=1){
      Swal.fire({
         title: 'Ingrese mas datos',
         color:"white",
         background:"black",
         
       })      
      } else{ 
         containerEquiposSorteados.style.display="flex"
  
  arrayPersonas.sort(function() {
    return Math.random() - 0.5
    });

  arrayEquipos.sort(function(){
    return Math.random()-0.5
   });
  personasSorteadas.innerHTML=arrayPersonas;
  equiposSorteados.innerHTML=arrayEquipos;


 }}
 

)



/*----SORTEAR PERSONAS--- */


const personaIngresada=document.getElementById("personaIngresada");
const botonPersona=document.getElementById("botonPersona");
const sortearPersona= document.getElementById("sortearPersona");
const cantidadPersona= document.getElementById("cantidadPersona")
const formPersonas= document.getElementById("formPersonas")
const labelPersona= document.getElementById("labelPersona")



const arrayPersonasSortear=[];

formPersonas.addEventListener("submit", (e)=>{
   e.preventDefault();
   arrayPersonasSortear.push(personaIngresada.value)

   
   labelPersona.style.background="green";
   labelPersona.innerHTML="Añadido"


   function alertAdd(){ 
      labelPersona.style.background="#e3004b"
      labelPersona.innerHTML="Participantes"
   } 
   setTimeout(alertAdd, 800);




   formPersonas.reset();
})

sortearPersona.addEventListener("click", ()=>{  
   
      aleatorio = arrayPersonasSortear[Math.floor(Math.random() * arrayPersonasSortear.length)];
   
     
       
         Swal.fire({
            icon: 'check',
            title: 'Las persona elegida fue',
            text: aleatorio,
            showConfirmButton: false,
            color:"white",
            background:"black",
            timer:2000
            
          })
       
    }
)