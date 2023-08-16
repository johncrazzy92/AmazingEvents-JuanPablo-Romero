//---import

import { highestAssistCalculator,lowestAssistCalculator,postFirstTable, largestEvent,postTable } from "./modules/functions.js";

//----fetch

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((respuesta) => respuesta.json())
  .then((respuesta) => {
    let data = respuesta.events;
    let currentDate = respuesta.currentDate
    let upcomingEvents = [...data].filter(event => event.date > respuesta.currentDate)
    let pastEvents = [...data].filter(event => event.date < respuesta.currentDate)
    //primera tabla
    //------highest assist
    postFirstTable(highestAssistCalculator(pastEvents),"highest")
    //-----lowest assist
    postFirstTable(lowestAssistCalculator(pastEvents),"lowest")
    //------largest
    postFirstTable(largestEvent(data),"largest")
    
    //------segunda y tercera tabla    
    postTable(upcomingEvents,"upcomingEvents",currentDate)
    postTable(pastEvents,"pastEvents",currentDate)

    }
)
  .catch((error) => {
    console.error("hubo un error :", error);
  });