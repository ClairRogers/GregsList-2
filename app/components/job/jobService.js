import Job from "../../models/job.js";

//private

let _api = axios.create({
  baseURL: '//localhost:3000/api'
})

let _state = {
  jobs: []
}

let _subscribers = {
  jobs: []
}

function setState(prop, value) {
  _state[prop] = value
  _subscribers[prop].forEach(fn => fn());
}


//public
export default class JobService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Jobs() {
    return _state.jobs.map(j => new Job(j))
  }

  getApiJobs() {
    _api.get('jobs')
      .then(res => {
        let data = res.data.map(j => new Job(j))
        setState('jobs', data)
      })
  }

  addJob(rawJob) {
    let newJob = new Job(rawJob)
    _api.post('jobs', newJob)
      .then(res => {
        this.getApiJobs()
      })
  }
  deleteJob(id) {
    _api.delete('jobs/' + id)
      .then(res => {
        this.getApiJobs()
      })
  }
}