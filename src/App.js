import React from 'react';
import Todolist from './components/todolist'


class App extends React.Component {
  render(){
    return (
      <div>
        <h1>TodoApp</h1>
        <Todolist />
      </div>
    )
  }
   
}

export default App;
