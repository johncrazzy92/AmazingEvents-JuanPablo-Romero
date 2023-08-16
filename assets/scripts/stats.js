//---import

import { highestAssistCalculator,lowestAssistCalculator,postFirstTable, largestEvent } from "./modules/functions.js";

//----fetch

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((respuesta) => respuesta.json())
  .then((respuesta) => {
    let data = respuesta.events;
    // console.log(data);
    let upcomingEvents = [...data].filter(event => event.date > respuesta.currentDate)
    let pastEvents = [...data].filter(event => event.date < respuesta.currentDate)
    console.log(upcomingEvents);
    //primera tabla
    //------highest assist
    postFirstTable(highestAssistCalculator(pastEvents),"highest")
    //-----lowest assist
    postFirstTable(lowestAssistCalculator(pastEvents),"lowest")
    //------largest
    postFirstTable(largestEvent(data),"largest")
    //segunda tabla
    //-------total c/u
    function totalRevenuesCalculator(array) {
        let arrayObj = array
        for (const obj of arrayObj) {
            obj.totalRevenues = obj.price * obj.estimate
            obj.assistPercentage = Number((obj.estimate * 100 / obj.capacity).toFixed(2))
        }
        return arrayObj
    }
    let indTotalRevenues = totalRevenuesCalculator(upcomingEvents)
    
    function arrayConGrupos(array) {
        let newArray = Array.from(new Set(array.map(event => event.category)) )
        
        let arrayObj = newArray.map(category => {   //variable. Se aplica map, para ejecutar una funcion en cada string del array newArray.
            const eventos = array.filter(event => event.category === category) //variable nueva, que contendra los objetos filtrados por filter, que sean iguales. se compara de cada evento, su . category con la category de .map
            const totalRevenues = eventos.reduce((total, event)=> total + event.totalRevenues, 0) // suma con reduce, para sumar todas las ganancias 
            const totalAssist = (eventos.reduce((total, evento)=> total + evento.assistPercentage, 0) / eventos.length).toFixed(2)
            const obj = {category: category,revenue: totalRevenues,totalAssist: totalAssist, events: eventos} //se crea una constante con un nuevo objeto que contiene como categoria, la category que tomo map, y un array de eventos filtrados tomados de la variable anterior
            return obj  //  retorna el nuevo objeto y luego se aplica lo mismo para cada categoria
            
        })
        return arrayObj
        }    
    let arrayConCategorias = arrayConGrupos(indTotalRevenues)
    console.log(arrayConCategorias);
    function postTable(array,id){
        let tableCont = document.getElementById(id)
        array.forEach(element => {
            tableCont.innerHTML+=`<tr>
                                <td>${element.category}</td>
                                <td>$${element.revenue}</td>
                                <td>${element.totalAssist} %</td>
                            </tr>`
        });
        
    }
        
    postTable(arrayConCategorias,"upcomingEvents")

    }
    )
  .catch((error) => {
    console.error("hubo un error :", error);
  });


                            
