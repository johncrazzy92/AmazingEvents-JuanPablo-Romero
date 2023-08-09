const cardSection = document.getElementById("cardsIndex");

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
