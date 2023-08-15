//-----------------Index---------------------

//----crador de checkboxes
export function checkboxCreator (event){
    let checkboxFilter = document.createElement("input")
    checkboxFilter.className = "btn-check"
    checkboxFilter.setAttribute ("type", "checkbox")
    checkboxFilter.setAttribute ("name", event) 
    checkboxFilter.id =`${event}`
    checkboxFilter.setAttribute ("value", event)
    return checkboxFilter
}

export function labelCreator(event) {
    let labelFilter = document.createElement("label")
    labelFilter.className = "btn btn-outline-danger"
    labelFilter.setAttribute("for", event)
    labelFilter.textContent = `${event}`
    return labelFilter
}

//-----------------------appendchild a container
export function renderCheckFilter(set , container) {
    set.forEach(evento => {
        container.appendChild(checkboxCreator(evento))
        container.appendChild(labelCreator(evento))
    });
}

//-------------Cards maker

export function cardsMaker(event,container) {

//--------------
const interiorCard = document.createElement ("div")
interiorCard.className = "d-flex flex-column align-items-center justify-content-between p-3 shadow-lg col-11 col-sm-8 col-md-5 col-lg-4 col-xl-3 col-xxl-2 radiusCard"
container.appendChild(interiorCard)
    
const imgCard = document.createElement("img")
imgCard.className = "w-100"
imgCard.setAttribute("src", event.image)
imgCard.setAttribute("alt", event.category)

const h2 = document.createElement("h2")
h2.textContent = event.name

const pDescription = document.createElement("p")
pDescription.textContent = event.description
interiorCard.appendChild(imgCard)
interiorCard.appendChild(h2)
interiorCard.appendChild(pDescription)

//----------------------
const pagNameRef = document.getElementsByClassName("pagRef")

const divPrice = document.createElement("div")
divPrice.className = "col-12 d-flex justify-content-between align-items-center"

const pPrice = document.createElement("p")
pPrice.textContent = `Price : $${event.price}`

const aPrice = document.createElement("a")
aPrice.className ="btn btn-outline-danger btn-sm"
if(pagNameRef.id !== "pagRef"){
    aPrice.setAttribute("href",`./assets/pages/details.html?_id=${event._id}`)}
    else {aPrice.setAttribute("href",`./details.html?_id=${event._id}`);}

aPrice.textContent ="Details"

interiorCard.appendChild(divPrice)
divPrice.appendChild(pPrice)
divPrice.appendChild(aPrice)
return interiorCard
}

//-------------Render cards

export function sendCards(eventData ,destiny) {
    for (const eventDataCollected of eventData) {
        
        destiny.appendChild(cardsMaker(eventDataCollected,destiny))
    }
}

// filtro por checkbox
function checkFilterCards(array) {
    let checkbtn = document.querySelectorAll(".btn-check:checked") // se asigna una nodelist a checkbtn
    let checkbtnList = Array.from(checkbtn).map( btn => btn.value)  // crea un array del node y en base a este crea un nuevo array con los valores de la propiedad value de cada objeto del array
    let filteredCheck = array.filter( event => checkbtnList.includes(event.category))  // de checklist incluye (....) 
    return filteredCheck
}

//filtro por busqueda 
function searchFiltro(input,array) {
    let searchFilter = array.filter( event => event.name.toLowerCase().includes(input.value.toLowerCase())) //si input esta vacio,contiene un "" y en includes cuando event.name se incluye en "" da true, por que cualquier cadena contiene una cadena vacia 
        return searchFilter
}

// filtrar y enviar 
export function updateFilteredCards(input, events,container) {
        let filteredByCheck = checkFilterCards(events); // invoca funcion que genera el array de objetos filtrados por checkbox

        if (filteredByCheck.length === 0 && input.value === "") {
        container.innerHTML = "";                 // ni checkbox ni el search estan activados
        sendCards(events, container);
    } else {
        let filteredBySearch = searchFiltro(input, events);  //invoco funcion para generarme un array con una lista de objetos filtrados por el search

        if (filteredByCheck.length === 0) {    // si el array de checkbox es igual a 0 solo mostrara el array de search
            if (filteredBySearch.length !== 0) {
                container.innerHTML = "";
                sendCards(filteredBySearch, container);
            } else {                                                              //si no hay nada
                container.innerHTML = `<div id="message" class="col-12 d-flex justify-content-center align-items-center"> 
                    <p class="display-4"> "The searched event was not found."</p>
                </div>`;
            }
        } else {
            let intersection = filteredByCheck.filter(event => filteredBySearch.includes(event)); // nuevo array con filtro para checkbox en base a lo que tenga search / si el input no tiene nada, se mostrara solo lo de checkbox
            if (intersection.length !== 0) {
                container.innerHTML = "";
                sendCards(intersection, container);
            } else {
                container.innerHTML = `<div id="message" class="col-12 d-flex justify-content-center align-items-center">
                    <p class="display-4"> "The searched event was not found."</p>
                </div>`;
            }
        }
    }
}

//------------------details---------------------

function cardMakerDetails(event,date) {
    if (event.date < date ) {
        return `<div class="card mb-3 shadow-lg" style="max-width: 80vw;">
                <div class="row g-0">
                    <div class="col-md-6 d-flex justify-content-center">
                        <img src="${event.image}" class="img-fluid object-fit-cover rounded-start w-100" alt="${event.category}">
                    </div>
                    <div class="col-md-6 d-md-flex ">
                        <div id="detailCard" class="card-body d-flex flex-column justify-content-center gap-4">
                            <h2 class="card-title fw-bold display-5">${event.name}</h2>
                            <ul class="d-flex flex-column gap-3">
                                <li>Date: ${event.date}</li>
                                <li class="card-text">${event.description}</li>
                                <li>
                                    Category: ${event.category}
                                </li>
                                <li>
                                    Place: ${event.place}
                                </li>
                                <li>
                                    Capacity: ${event.capacity}
                                </li>
                                <li>
                                    Assistance: ${event.assistance}
                                </li>
                                <li>
                                    Price: ${event.price}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> `    
    } else {
        return `<div class="card mb-3 shadow-lg" style="max-width: 80vw;">
<div class="row g-0">
    <div class="col-md-6 d-flex justify-content-center">
        <img src="${event.image}" class="img-fluid object-fit-cover rounded-start w-100" alt="${event.category}">
    </div>
    <div class="col-md-6 d-md-flex ">
        <div id="detailCard" class="card-body d-flex flex-column justify-content-center gap-4">
            <h2 class="card-title fw-bold display-5">${event.name}</h2>
            <ul class="d-flex flex-column gap-3">
                <li>Date: ${event.date}</li>
                <li class="card-text">${event.description}</li>
                <li>
                    Category: ${event.category}
                </li>
                <li>
                    Place: ${event.place}
                </li>
                <li>
                    Capacity: ${event.capacity}
                </li>
                <li>
                    Estimate: ${event.estimate}
                </li>
                <li>
                    Price: ${event.price}
                </li>
            </ul>
        </div>
    </div>
</div>
</div> `

    }
}

export function sendCardDetails(event,container,date) {
    container.innerHTML = cardMakerDetails(event,date)
}



