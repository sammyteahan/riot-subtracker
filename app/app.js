import Riot from 'riot';
import chart from 'chart.js';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import './components/subEntry.tag';
import './components/line-graph.tag';
import './components/radar-graph.tag';
import './components/app.tag';
import './components/submission-list.tag';
import './components/sweep-list.tag';
import './components/submission-form.tag';

/**
* @desc need a better way to pass actions arround
*/
import {
  fetchSubmissions,
  fetchSweeps,
  addSubmission 
} from './actions/actions';


const submissions = (state, action) => {
  switch (action.type) {
    case 'ADD_SUBMISSION':
      return {
        id: action.id,
        name: action.name
      }
    default:
      return state;
  }
};

function submissionReducer(state={}, action) {
  switch(action.type) {
    case 'RECEIVE_SUBMISSIONS':
      return Object.assign({}, state, {
        items: action.data
      });
    case 'SUBMISSION_ADDED':
      return [...state, {
          items: action.name
        }
      ];
    default:
      return state;
  }
}

function sweepsReducer(state={}, action) {
  switch(action.type) {
    case 'RECEIVE_SWEEPS':
      return Object.assign({}, state, {
        items: action.data
      });
    case 'INCREMENT_SWEEP':
      return state;
    case 'INCREMENT_THING':
      return state;
    default:
      return state;
  }
}

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

const rootReducer = combineReducers({
  submissions: submissionReducer,
  sweeps: sweepsReducer
});

const reduxStore = createStoreWithMiddleware(rootReducer);

// Riot.mount('submission-entry', {data: params.lineData});
// Riot.mount('line-graph', {data: params.lineData, chart: chart});
// Riot.mount('radar-graph', {data: params.radarData, chart: chart});

Riot.mount('app', {
  store: reduxStore,
  chart: chart,
  fetchSubmissions: fetchSubmissions,
  fetchSweeps: fetchSweeps,
  addSubmission: addSubmission
});