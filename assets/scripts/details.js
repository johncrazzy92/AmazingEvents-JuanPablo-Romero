//---import
import { sendCardDetails } from "./modules/functions.js";

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
        sendCardDetails(dataCard,detailsCont,eventDate)
        })
    .catch(error => {
        console.error("hubo un error :" ,error)
    })






