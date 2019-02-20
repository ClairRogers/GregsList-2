//private
import HouseService from "./houseService.js";

let _hs = new HouseService()

function draw() {
    let template = ''
    _hs.Houses.forEach(h => {
        template += h.getTemplate()
    })
    document.getElementById('available-content').innerHTML = template
    document.getElementById('form-content').innerHTML = `
    <p>List your house below:</p>
    <form onsubmit="app.controllers.houseController.addHouse(event)">
        <input type="number" name="beds" placeholder="Beds" required>
        <input type="number" name="bath" placeholder="Bath" required>
        <input type="number" name="levels" placeholder="Levels" required>
        <input type="number" name="year" placeholder="Year Built" required>
        <input type="number" name="price" placeholder="Price" required>
        <input type="url" name="imgUrl" placeholder="Image URL" required>
        <textarea class="my-1 textarea" name="description" rows="1" cols="70"
            placeholder="Description"></textarea><br>
        <button class="btn btn-secondary w-25 mb-4" type="submit">Submit</button>
    </form>
    `

}

//public
export default class HouseController {
    constructor() {
        _hs.addSubscriber('houses', draw)
    }
    addHouse(event) {
        event.preventDefault();
        let form = event.target
        let newHouse = {
            bedrooms: form.beds.value,
            bathrooms: form.bath.value,
            levels: form.levels.value,
            year: form.year.value,
            price: form.price.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value
        }
        _hs.addHouse(newHouse)
        form.reset()

    }
    deleteHouse(id) {
        _hs.deleteHouse(id)
    }

    getHouses() {
        _hs.getApiHouses()
    }
}