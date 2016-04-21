import React from 'react';
import AppDispatcher from '../AppDispatcher.js';
import TodoneStore from '../store/TodoneStore.js';


class WorkDoneComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            todone: TodoneStore.getState()
        };
    }
    
    UndoAddTodone(item){
       AppDispatcher.dispatch({action: "UNDO_ADDTODONE", data: item})
    }

    componentWillMount() {
        TodoneStore.on("change", () => {
            this.setState({
                todone: TodoneStore.getState(),
            });
        })
    }
    
    render() {
        let lis = []
        let me = this;
        lis = this.state.todone.map(function(d, i){
            return <button key= {i} className="list-group-item" onClick={ me.UndoAddTodone.bind(me, d) }>
            <span className="fa fa-check"></span><span className="completed-todo">{d.text}</span>
            </button>;
        })
        return ( <ul className="list-group"> {lis} </ul>);

    }

}

AppDispatcher.register((payload) => {
        let action = payload.action;
        let data = payload.data;

        switch (action) {
            // Respond to add-item action
            case 'UNDO_ADDTODONE':
                TodoneStore.removeTodone(data);
                break;
                
            case 'ADD_TODONE':
                TodoneStore.addTodone(data);
                break;

            default:
                return true;
        }
        return true;
    });
    
let DoneComponent = new WorkDoneComponent();
window.DoneComponent = DoneComponent;
export default WorkDoneComponent;
