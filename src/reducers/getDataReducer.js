// src/reducer.js

import { List, Map } from 'immutable';
import { loadData } from '../actions/getDHISdta';

const init = Map({'entries': List([])});

export default function getDataReducer(state=init) {
  return loadData("").then(function(data){
    state.update('entries', entries => entries.push(data);  
    )}
    default:
        return state;
  }
}