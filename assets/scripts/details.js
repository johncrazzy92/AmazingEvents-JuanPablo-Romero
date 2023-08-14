let detailsCont = document.getElementById("detailCard")

let locationSrc = location.search    //se accede a url de pagina
let srcParams = new URLSearchParams(locationSrc) //genera obj urlsrc
let idParams = srcParams.get("_id")

function cardMaker(event) {
    if (event.date < data.currentDate ) {
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
    } else{
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

let dataCard = data.events.find( events => events._id === idParams) 

function sendCard(event,container) {
    container.innerHTML = cardMaker(event)
}
sendCard(dataCard,detailsCont)





