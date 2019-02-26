export default class House {
    constructor(data) {
        this._id = data._id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.imgUrl = data.imgUrl || '//placehold.it/300x300'
        this.levels = data.levels
        this.year = data.year
        this.price = data.price
        this.description = data.description
    }
    getTemplate() {
        return `
        <div class="col-12 col-md-3">
        <div class="card my-2">
        <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${this.year} ${this.bedrooms}bed - ${this.bathrooms}bath</h5>
            <p class="card-text">${this.description} -- $${this.price}</p>
            <button onclick="app.controllers.houseController.deleteHouse('${this._id}')">Delete</button>
        </div>
    </div>
    </div>
    `
    }
}