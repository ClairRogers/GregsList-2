export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  getTemplate() {
    return `
        <div class="card col-3">
        <div class="card-body">
            <h4 class="card-title">${this.company}</h4>
            <h5>${this.jobTitle}</h5>
            <h5>${this.rate}/hr -- ${this.hours} hours</h5>
            <p class="card-text">${this.description}</p>
        </div>
    </div>
    `
  }
}