import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher.js';
import api from '../api/api.jsx';


class TodoStore extends EventEmitter {
    constructor(){
        super();
        var data = api.fetchTodo();
        this.todos = data.todos;       
        console.log("todostore",this.todos);
    }
    

    getState() {
        return this.todos;
    }
    
    removeTodo(todo) {
        var me = this;
        me.todos.map(function(item, index){
            if(item.id === todo.id){
                me.todos.splice(index, 1);       
            }
        })
       this.emit("change");
    }
    
    addTodo(text) {
        if(text.id == undefined)
        this.todos.push({
            id: Date.now(),
            text: text,
            complete: "false"
        });
        else{
           this.todos.push(text);
        }
        this.emit("change");
    }
}

let appStoreInstance = new TodoStore();
window.appStoreInstance = appStoreInstance;
export default  appStoreInstance;