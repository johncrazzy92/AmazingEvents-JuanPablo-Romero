//-----imports

import {
  renderCheckFilter,
  sendCards,
  updateFilteredCards,
} from "./modules/functions.js";

const cardSection = document.getElementById("cardsIndex");
const pagNameRef = document.getElementsByClassName("pagRef")
console.log(pagNameRef[0].id);


//----------Checkbox and label

let filterBox = document.getElementById("filterBox");

//-----------fetch
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((respuesta) => respuesta.json())
  .then((respuesta) => {
    let events = respuesta.events;
    //---------------------- categorias en array
    let setCategory = Array.from(new Set(events.map((data) => data.category)));
    //--------------crea checkbox
    renderCheckFilter(setCategory, filterBox);
    //---primeras cartas
    sendCards(events, cardSection);

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
    inputSearch.addEventListener("keyup", (event) => {
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

//-----------fetch events
fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((respuesta) => respuesta.json())
  .then((respuesta) => {
    let events = respuesta.events;
    
  })
  .catch((error) => {
    console.error("hubo un erro :", error);
  });
