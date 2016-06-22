import axios from 'axios';
import fetch from 'isomorphic-fetch';

/**
* @name actions
*/
export const SWEEP_ADDED = 'SWEEP_ADDED';
export const SUBMISSION_ADDED = 'SUBMISSION_ADDED';
export const SUBMISSION_DELETED = 'SUBMISSION_DELETED';
export const RECEIVE_SUBMISSIONS = 'RECEIVE_SUBMISSIONS';
export const RECEIVE_SWEEPS = 'RECEIVE_SWEEPS';
export const SWEEP_DELETED = 'SWEEP_DELETED';



/**
* @name action creators
*
* @todo replace axios with isomorphic-fetch
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

export function deleteSubmission(id, index) {
  return function (dispatch, getState) {
    axios.delete(`http://localhost:3000/submissions/${id}`).then((response) => {
      dispatch(submissionDeleted(id, index));
    });
  }
}

function submissionDeleted(id, index, response) {
  return {
    type: SUBMISSION_DELETED,
    id: id,
    index, index
  };
}

export function fetchSweeps() {
  return function (dispatch, getState) {
    return fetch('http://localhost:3000/sweeps')
      .then(response => response.json())
      .then(json => dispatch(receiveSweeps(json)));
  }
}

function receiveSweeps(response) {
  return {
    type: RECEIVE_SWEEPS,
    data: response
  };
}

export function addSweep(sweepName) {
  return function (dispatch, getState) {
    axios.post('http://localhost:3000/sweeps', {
      name: sweepName
    }).then((response) => {
      dispatch(newSweep(response.data.id, response.data.name));
    });
  }
}

function newSweep(id, name) {
  return {
    type: SWEEP_ADDED,
    data: {
      id: id,
      name: name
    }
  };
}

export function deleteSweep(id, index) {
  return function (dispatch, getState) {
    axios.delete(`http://localhost:3000/sweeps/${id}`).then((response) => {
      dispatch(sweepDeleted(id, index, response));
    });
  }
}

function sweepDeleted(id, index, response) {
  return {
    type: SWEEP_DELETED,
    id: id,
    index: index
  };
}
