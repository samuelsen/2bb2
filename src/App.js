import React from 'react';

import CollapsibleList from './components/CollapsibleList';
import { TodoList } from './containers/todoContainer';

const entries = [
  {namespace: "NAMESPACE1", ids: ["KEY1", "KEY2", "KEY3"]},
  {namespace: "NAMESPACE2", ids: ["KEY4", "KEY5"]}
];

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CollapsibleList entries={entries} />
      </div>
    );
  }
}
