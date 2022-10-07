let dataframe = []
    let nameSelector;
    let values = [];

const select = document.getElementById("names");

  
let sliders = document.querySelectorAll(".slidecontainer");


function getSlidersValues(){
  console.log(sliders[0].querySelector("input").value); 
  for (let i = 0; i < sliders.length; i++) {
   values[i] = sliders[i].querySelector("input").value/100
    
  }
  return values;
}




function setup() {
  createCanvas(1200, 400);
      
dataframe = [
  {
    "Nombre": "Camilo",
    "Atributo1": "0.86",
    "Atributo2": "0.83",
    "Atributo3": "0.75",
    "Atributo4": "0.79",
    "Atributo5": "0.83",
    "color": "004ca3"
  },
  {
    "Nombre": "Salomón",
    "Atributo1": "0.83",
    "Atributo2": "0.15",
    "Atributo3": "0.90",
    "Atributo4": "0.21",
    "Atributo5": "0.16",
    "color": "000000"
  },
  {
    "Nombre": "Vera",
    "Atributo1": "0.35",
    "Atributo2": "0.40",
    "Atributo3": "0.34",
    "Atributo4": "0.76",
    "Atributo5": "0.38",
    "color": "151b33"
  },
  {
    "Nombre": "Angelina",
    "Atributo1": "0.64",
    "Atributo2": "0.29",
    "Atributo3": "0.30",
    "Atributo4": "0.70",
    "Atributo5": "0.68",
    "color": "224045"
  },
  {
    "Nombre": "Andres",
    "Atributo1": "0.02",
    "Atributo2": "0.90",
    "Atributo3": "0.40",
    "Atributo4": "0.57",
    "Atributo5": "0.42",
    "color": "4e875b"
  },
  {
    "Nombre": "Felipe",
    "Atributo1": "0.87",
    "Atributo2": "0.12",
    "Atributo3": "0.73",
    "Atributo4": "0.64",
    "Atributo5": "0.25",
    "color": "aaeb71"
  },
  {
    "Nombre": "Sofia",
    "Atributo1": "0.48",
    "Atributo2": "0.53",
    "Atributo3": "0.01",
    "Atributo4": "0.60",
    "Atributo5": "0.27",
    "color": "ffc0cb"
  },
  {
    "Nombre": "Sara",
    "Atributo1": "0.81",
    "Atributo2": "0.13",
    "Atributo3": "0.88",
    "Atributo4": "0.19",
    "Atributo5": "0.14",
    "color": "ff70d4"
  },
  {
    "Nombre": "Isabella",
    "Atributo1": "0.31",
    "Atributo2": "1.00",
    "Atributo3": "0.98",
    "Atributo4": "0.65",
    "Atributo5": "0.76",
    "color": "003366"
  },
  {
    "Nombre": "Kevin",
    "Atributo1": "0.04",
    "Atributo2": "0.35",
    "Atributo3": "0.92",
    "Atributo4": "0.63",
    "Atributo5": "0.57",
    "color": "de5404"
  }
]


console.log(calcularCos(dataframe[4],dataframe[1]))

}

function draw() {

  let value = select.options[select.selectedIndex].text
 

  textAlign(CENTER);
  background("FFFFFF");
  if(value != undefined){
    ordernarypintar(value)
  }
 
  line(100,300,1000,300);
  textSize(24);
  fill(0) 
  text("Mucha afinidad",100,330)
  text("Poca afinidad",1000,330)
}







function calcularCos(a,b) {
 values =  getSlidersValues();

 ax1 = a.Atributo1 * values[0];
 bx1 = b.Atributo1 * values[0];
 ax2 = a.Atributo2 * values[1];
 bx2 = b.Atributo2 * values[1];
 ax3 = a.Atributo3 * values[2];
 bx3 = b.Atributo3 * values[2];
 ax4 = a.Atributo4 * values[3]; 
 bx4 = b.Atributo4 * values[3];
 ax5 = a.Atributo5 * values[4];
 bx5 = b.Atributo5 * values[4];

pp = (ax1 * bx1)+(ax2 * bx2)+(ax3 * bx3)+(ax4 * bx4)+(ax5 * bx5);

magA = Math.abs(Math.sqrt((ax1*ax1)+(ax2*ax2)+(ax3*ax3)+(ax4*ax4)+(ax5*ax5)));

magB = Math.abs(Math.sqrt((bx1*bx1)+(bx2*bx2)+(bx3*bx3)+(bx4*bx4)+(bx5*bx5)));


cos = pp/(magA*magB)



 return cos;
}

function ordernarypintar(nombre){
  for (let index = 0; index < dataframe.length; index++) {

    const prota = dataframe.find(element => element.Nombre == nombre);

   
    dist = (1-calcularCos(prota,dataframe[index]))*1000;
    let c = color('#'+dataframe[index].color);
    fill(c);
    if(dataframe[index].Nombre!=nombre){
      circle(100+dist,200,20);
      textSize(8)
      text(dataframe[index].Nombre, 100+dist,230)
    }else{
      circle(100,200,20);
      textSize(8)
      text(prota.Nombre, 100,230)
    }
   
  }
}