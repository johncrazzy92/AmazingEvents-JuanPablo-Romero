let detailsCont = document.getElementById("detailCard")

let locationSrc = location.search    //se accede a url de pagina
let srcParams = new URLSearchParams(locationSrc) //genera obj urlsrc
let idParams = srcParams.get(`_id`)

//-----------fetch
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(respuesta => respuesta.json())
.then(respuesta =>{ 
        let events = respuesta.events
        let eventDate = respuesta.currentDate
        let dataCard = events.find( event => event._id == idParams) 
        sendCard(dataCard,detailsCont,eventDate)
        })
    .catch(error => {
        console.error("hubo un error :" ,error)
    })

function cardMaker(event,date) {
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

function sendCard(event,container,date) {
    container.innerHTML = cardMaker(event,date)
}





