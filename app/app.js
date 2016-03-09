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

/**
* @desc tmp data store of sub/sweep data
*/
var params = {
  radarData: {
    labels: ["Triangle", "Arm Triangle", "Arm Lock", "Shoulder Lock", "Choke", "Ankle Lock", "Knee Bar"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  },
  lineData: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  }
};

function reducer(state={submissions: [], sweeps: []}, action) {
  switch(action.type) {
    case 'RECEIVE_SUBMISSIONS':
      return Object.assign({}, state, {
        submissions: action.data
      });
    case 'RECEIVE_SWEEPS':
      return Object.assign({}, state, {
        sweeps: action.data
      });
    case 'SUBMISSION_ADDED':
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];
    default:
      return state;
  }
}

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

function submissionReducer(state=[], action) {
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

function sweepsReducer(state=[], action) {
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

Riot.mount('submission-entry', {data: params.lineData});
Riot.mount('line-graph', {data: params.lineData, chart: chart});
Riot.mount('radar-graph', {data: params.radarData, chart: chart});

// Riot.mount('app', {
//   store: reduxStore,
//   chart: chart,
//   fetchSubmissions: fetchSubmissions,
//   fetchSweeps: fetchSweeps,
//   addSubmission: addSubmission
// });