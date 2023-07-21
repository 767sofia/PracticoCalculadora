const pantalla = document.querySelector(".result");
const botones = document.querySelectorAll(".pastel-purple");
const botonIgual = document.querySelector(".equal");
const botonBorrar = document.querySelector(".clear");


//Botones

botones.forEach(boton =>{
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;

    if(pantalla.textContent === "0"|| pantalla.textContent === "Error"){
      pantalla.textContent = botonApretado;
    } else{

      pantalla.textContent += botonApretado;
    }
  })
})

//Boton borrar
botonBorrar.addEventListener("click", () =>{

  if(botonBorrar.id === "c" || pantalla.textContent === "Error"){
    pantalla.textContent = "0";
    return;
   }

})

//Boton igual

botonIgual.addEventListener("click", () => {
  try{
    pantalla.textContent = eval(pantalla.textContent);
  }catch{
    pantalla.textContent = "Error";
  }
 
  return;
})

