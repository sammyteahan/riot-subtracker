import axios from 'axios';

/**
* @name actions
*/
export const INCREMENT_SWEEP = 'INCREMENT_SWEEP';
export const ADD_SWEEP = 'ADD_SWEEP';
export const SWEEP_ADDED = 'SWEEP_ADDED';
export const SUBMISSION_ADDED = 'SUBMISSION_ADDED';
export const INCREMENT_SUB = 'INCREMENT_SUB';
export const RECEIVE_SUBMISSIONS = 'RECEIVE_SUBMISSIONS';
export const RECEIVE_SWEEPS = 'RECEIVE_SWEEPS';


/**
* @name action creators
*/
export function fetchSubmissions() {
  return function (dispatch, getState) {
    return axios.get('http://localhost:3000/submissions').then((response) => {
      dispatch(receiveSubmissions(response));
    });
  }
}

function receiveSubmissions(response) {
  return {
    type: RECEIVE_SUBMISSIONS,
    data: response.data
  };
}

export function addSubmission(submissionName) {
  return function (dispatch, getState) {
    axios.post('http://localhost:3000/submissions', {
      name: submissionName
    }).then((response) => {
      dispatch(newSubmissionAdded(response.data.id, response.data.name));
    });
  }
}

function newSubmissionAdded(id, name) {
  return {
    type: SUBMISSION_ADDED,
    data: {
      id: id,
      name: name
    }
  };
}

export function fetchSweeps() {
  return function (dispatch, getState) {
    return axios.get('http://localhost:3000/sweeps').then((response) => {
      dispatch(receiveSweeps(response));
    });
  }
}

function receiveSweeps(response) {
  return {
    type: RECEIVE_SWEEPS,
    data: response.data
  };
}