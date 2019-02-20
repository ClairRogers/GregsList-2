import Job from "../../models/job.js";

//private

let _api = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api'
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
        let data = res.data.data.map(j => new Job(j))
        setState('jobs', data)
      })
  }
}