import Riot from 'riot';
import chart from 'chart.js';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { submissionReducer, sweepsReducer } from './reducers/reducers';
import './components/line-graph.tag';
import './components/radar-graph.tag';
import './components/app.tag';
import './components/submission-list.tag';
import './components/sweep-list.tag';
import './components/submission-form.tag';
import './components/sweep-form.tag';


/**
* @desc need a better way to pass actions arround
*/
import {
  fetchSubmissions,
  fetchSweeps,
  addSubmission,
  addSweep,
  deleteSubmission,
  deleteSweep
} from './actions/actions';


/**
* @desc stylesheet
*/
import './sass/main.scss';


const loggerMiddleware = createLogger();

const createStoreWithMiddleware = compose(
  applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
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
  addSubmission: addSubmission,
  addSweep: addSweep,
  deleteSubmission: deleteSubmission,
  deleteSweep: deleteSweep
});
