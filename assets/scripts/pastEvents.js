const cardSection = document.getElementById("cardsIndex");

//----------Checkbox and label

let filterBox = document.getElementById("filterBox")
let events = data.events

function checkboxCreator (event){
    let checkboxFilter = document.createElement("input")
    checkboxFilter.className = "btn-check"
    checkboxFilter.setAttribute ("type", "checkbox")
    checkboxFilter.setAttribute ("name", event) 
    checkboxFilter.id =`${event}`
    checkboxFilter.setAttribute ("value", event)
    return checkboxFilter
}
function labelCreator(event) {
    let labelFilter = document.createElement("label")
    labelFilter.className = "btn btn-outline-danger"
    labelFilter.setAttribute("for", event)
    labelFilter.textContent = `${event}`
    return labelFilter
}
//---------------------- categorias en array
let setCategory = Array.from( new Set((events.map( data => data.category))))
//-----------------------appendchild a container
function renderCheckFilter(set , container) {
    set.forEach(evento => {
        container.appendChild(checkboxCreator(evento))
        container.appendChild(labelCreator(evento))
    });
}

renderCheckFilter(setCategory,filterBox)

function cardsMaker(event) {
    let interiorCard = null
if (event.date < data.currentDate ) {
    

//--------------
interiorCard = document.createElement ("div")
interiorCard.className = "d-flex flex-column align-items-center justify-content-between p-3 shadow-lg col-11 col-sm-8 col-md-5 col-lg-4 col-xl-3 col-xxl-2 radiusCard"
cardSection.appendChild(interiorCard)

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

const divPrice = document.createElement("div")
divPrice.className = "col-12 d-flex justify-content-between align-items-center"

const pPrice = document.createElement("p")
pPrice.textContent = `Price : $${event.price}`

const aPrice = document.createElement("a")
aPrice.className ="btn btn-outline-danger btn-sm"
aPrice.setAttribute("href","./details.html")
aPrice.textContent ="Details"

interiorCard.appendChild(divPrice)
divPrice.appendChild(pPrice)
divPrice.appendChild(aPrice)

        return interiorCard
    }
    return interiorCard
}
function sendCards(eventData ,destiny) {
    for (const eventDataCollected of eventData) {
        const filteredCard = cardsMaker(eventDataCollected)
        if (filteredCard !== null) {
            destiny.appendChild(filteredCard)  
            }
            
    }
}

sendCards(data.events,cardSection)

// -------------------------------- modificador de events.category

let search = document.getElementById("searchBtn")
let inputSearch = document.getElementById("inputBtn")

//-----------------------------------Checkbox filter


let checkboxAndLabelsArray = Array.from(document.querySelectorAll(".btn-check")) 

search.addEventListener( "click", event => {
event.preventDefault()                          // evento para el buscador
    updateFilteredCards(inputSearch, events);
    
})

checkboxAndLabelsArray.forEach( checkbtn => {
    checkbtn.addEventListener("change", () =>{ // evento para los checkbox
        updateFilteredCards(inputSearch, events);
        
    })
} )



// filtro por checkbox
function checkFilterCards(array) {
    let checkbtn = document.querySelectorAll(".btn-check:checked")
    let checkbtnList = Array.from(checkbtn).map( input => input.value)  // que contiene categoria de objeto
    let filteredCheck = array.filter( event => checkbtnList.includes(event.category))  // de checklist  incluye (....) 
    return filteredCheck
}

//filtro por busqueda 
function searchFiltro(input,array) {
        let searchFilter = array.filter( event => event.name.toLowerCase().includes(input.value.toLowerCase()))
        return searchFilter
}

// filtrar y enviar 
function updateFilteredCards(input, events) {
        let filteredByCheck = checkFilterCards(events); // invoca funcion que genera el array de objetos filtrados por checkbox

        if (filteredByCheck.length === 0 && input.value === "") {
        cardSection.innerHTML = "";                 // ni checkbox ni el search estan activados
        sendCards(events, cardSection);
    } else {
        let filteredBySearch = searchFiltro(input, events);  //invoco funcion para generarme un array con una lista de objetos filtrados por el search

        if (filteredByCheck.length === 0) {    // si el array de checkbox es igual a 0 solo mostrara el array de search
            if (filteredBySearch.length !== 0) {
                cardSection.innerHTML = "";
                sendCards(filteredBySearch, cardSection);
            } else {
                cardSection.innerHTML = `<div id="message" class="col-12 d-flex justify-content-center align-items-center">
                    <p class="display-4"> "The searched event was not found."</p>
                </div>`;
            }
            
        } else {
            let intersection = filteredByCheck.filter(event => filteredBySearch.includes(event)); // nuevo array con filtro para checkbox en base a lo que tenga search
            console.log(intersection);
            if (intersection.length !== 0) {
                cardSection.innerHTML = "";
                sendCards(intersection, cardSection);
            } else {
                cardSection.innerHTML = `<div id="message" class="col-12 d-flex justify-content-center align-items-center">
                    <p class="display-4"> "The searched event was not found."</p>
                </div>`;
            }
        }
    }
}
