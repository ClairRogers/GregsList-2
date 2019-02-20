import JobService from "./jobService.js";

//private

let _js = new JobService

function draw() {
  let template = ''
  _js.Jobs.forEach(j => {
    template += j.getTemplate()
  })
  document.getElementById('available-content').innerHTML = template
  document.getElementById('form-content').innerHTML = `
    <form onsubmit="app.controllers.carController.addCar(event)">
        <input type="text" name="company" placeholder="Company" required>
        <input type="text" name="jobTitle" placeholder="Job Title" required>
        <input type="number" name="hours" placeholder="Hours" required>
        <input type="number" name="rate" placeholder="Rate of pay / hr" required>
        <input type="text" name="description" placeholder="Description">
        <button type="submit">Submit</button>
    </form>
    `

}

//public
export default class JobController {
  constructor() {
    _js.addSubscriber('jobs', draw)
  }

  getJobs() {
    _js.getApiJobs()
  }
}