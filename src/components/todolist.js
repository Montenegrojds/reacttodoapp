import React from 'react';

class Todolist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: '',
            tasks: [
                
                {taskName: 'test1', id:1},
                {taskName: 'test2', id:2},
                {taskName: 'test3', id:3},
                
            ]
        }
        this.DisplayList = this.DisplayList.bind(this);
    }
    
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
                <form>
                    <input />
                    <button>
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