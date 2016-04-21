import React from 'react';
import AppDispatcher from '../AppDispatcher.js';
import TodoStore from '../store/TodoStore.js';

export default class WorkToDoComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: TodoStore.getState()
        };
        console.log("todo", this.todos)
    }
    
    componentWillMount(){
        TodoStore.on("change", () => {          
            this.setState({
                todos: TodoStore.getState()
            });
        })
    }
    
    
    AddToDone(item){
       AppDispatcher.dispatch({action: "ADD_TODONE", data: item})
    }

    render() {
        let lis = []
        let me= this;
        lis = this.state.todos.map(function(d, i){
            return (<button key= {d.id} className="list-group-item" onClick={ me.AddToDone.bind(me, d) }>
                        <span>{d.text}</span>
                    </button>);
            })
        return ( <ul className="list-group"> {lis} </ul>);

    }

};

AppDispatcher.register((payload) => {
        let action = payload.action;
        let data = payload.data;

        switch (action) {

            // Respond to add-item action
            case 'ADD_TODO':
                TodoStore.addTodo(data);
                break;
                
            case 'UNDO_ADDTODONE':
                TodoStore.addTodo(data);
                break;
                
            case 'ADD_TODONE':
                TodoStore.removeTodo(data);
                break;

            default:
                return true;
        }
        return true;
    });
    
let ToDoComponent = new WorkToDoComponent();
window.ToDoComponent = ToDoComponent;