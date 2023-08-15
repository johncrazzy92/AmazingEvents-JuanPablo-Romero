//-----import

import {
  renderCheckFilter,
  sendCards,
  updateFilteredCards,
} from "./modules/functions.js";

const cardSection = document.getElementById("cardsIndex");

//----------Checkbox and label

let filterBox = document.getElementById("filterBox");

//-----------fetch
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((respuesta) => respuesta.json())
  .then((respuesta) => {
    let data = respuesta;
    console.log(data);
    //-----filtro de fecha
    let newArrayEvents = Array.from(data.events);
    let events = newArrayEvents.filter(
      (event) => event.date > data.currentDate
    );

    //-----default
    sendCards(events, cardSection);

    //---------------------- categorias en array
    let setCategory = Array.from(new Set(events.map((data) => data.category)));
    console.log(setCategory);

    //--------------crea checkbox
    renderCheckFilter(setCategory, filterBox);
  })
  .catch((error) => {
    console.error("hubo un erro :", error);
  });


//-----------fetch events
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((respuesta) => respuesta.json())
  .then((respuesta) => {
    let data = respuesta;
    //-----filtro de fecha
    let newArrayEvents = Array.from(data.events);
    let events = newArrayEvents.filter(
      (event) => event.date > data.currentDate
    );
    // --------------------input

    let search = document.getElementById("searchBtn");
    let inputSearch = document.getElementById("inputBtn");

    //-----------------------------------Checkbox filter

    let checkboxAndLabelsArray = Array.from(
      document.querySelectorAll(".btn-check")
    );
    search.addEventListener("click", (event) => {
      event.preventDefault(); //se le asigna un evento para el buscador
      updateFilteredCards(inputSearch, events, cardSection); //se ejecuta el filtro
    });

    checkboxAndLabelsArray.forEach((checkbtn) => {
      checkbtn.addEventListener("change", () => {
        //se le asigna un evento para cada checkbox del array
        updateFilteredCards(inputSearch, events, cardSection); //se ejecuta el filtro
      });
    });
  })
  .catch((error) => {
    console.error("hubo un erro :", error);
  });
