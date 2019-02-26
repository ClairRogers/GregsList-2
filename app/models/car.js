export default class Car {
    constructor(data) {
        this._id = data._id
        this.make = data.make
        this.model = data.model
        this.price = parseInt(data.price).toFixed(2)
        this.year = data.year
        this.imgUrl = data.imgUrl || '//placehold.it/300x300'
        this.description = data.description || 'No Description Provided'
    }


    getTemplate() {
        return `
        <div class="col-12 col-md-3">
        <div class="card my-2">
            <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.year} ${this.make} - ${this.model}</h5>
                <p class="card-text">${this.description} -- $${this.price}</p>
                <button onclick="app.controllers.carController.bid('${this._id}')">BID</button>
                <button onclick="app.controllers.carController.deleteCar('${this._id}')">Delete</button>
            </div>
        </div>
        </div>`
    }
}