import React from 'react';
import uniqid from 'uniqid';
class Todolist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: {taskName: '', id: uniqid()},
            tasks: [
                
                {taskName: 'test1', id:1},
                {taskName: 'test2', id:2},
                {taskName: 'test3', id:3},
                
            ]
        }
        this.DisplayList = this.DisplayList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = (e) =>{
        this.setState({
            task: {
                taskName: e.target.value,
                id: this.state.task.id,
            },
        });
    }

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
          tasks: this.state.tasks.concat(this.state.task),
          task: {taskName: '', id: uniqid()},
        });
      };
    
    DisplayList() {
        return this.state.tasks.map(name=> {
            return (
                <li>
                    {name.taskName}   
                </li>
            )
        })
    }
    render(){
        return(
            <div>
                <h2>Add new tasks</h2>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor="taskInput">Enter new Task</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.task.taskName}
                        type="text"
                        id="taskInput"
                        aria-required
                    />
                    
                    <button type='submit'>
                        Add 
                    </button>
                </form>
                <ul>
                    {this.DisplayList()}
                </ul>
            </div>
        )
    }
}

export default Todolist