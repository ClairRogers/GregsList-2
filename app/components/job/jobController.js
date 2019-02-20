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
  <p>List your job below:</p>
    <form onsubmit="app.controllers.jobController.addJob(event)">
        <input type="text" name="company" placeholder="Company" required>
        <input type="text" name="jobTitle" placeholder="Job Title" required>
        <input type="number" name="hours" placeholder="Hours" required>
        <input type="number" name="rate" placeholder="Rate of pay / hr" required>
        <textarea class="my-1 textarea" name="description" rows="1" cols="70"
            placeholder="Description"></textarea><br>
        <button class="btn btn-secondary w-25 mb-4" type="submit">Submit</button>
    </form>
    `

}


//public
export default class JobController {
  constructor() {
    _js.addSubscriber('jobs', draw)
  }
  addJob(event) {
    event.preventDefault()
    let form = event.target
    let newJob = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _js.addJob(newJob)
    form.reset()
  }
  deleteJob(id) {
    _js.deleteJob(id)
  }

  getJobs() {
    _js.getApiJobs()
  }
}