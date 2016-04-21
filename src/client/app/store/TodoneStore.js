import EventEmitter from 'events';
import AppDispatcher from '../AppDispatcher.js';
import _ from 'underscore';
import api from '../api/api.jsx';



class TodoneStore extends EventEmitter {
    
    constructor(){
        super();
        var data = api.fetchTodone();
        console.log(data)
        this.todone = data.todone;    
        //console.log("todonestore",this.todone);
    }
    
    getState() {
        return this.todone;
    }
    
    removeTodone(todone) {
        var me = this;
        me.todone.map(function(item, index){
            if(item.id === todone.id){
                me.todone.splice(index, 1);  
            }
        })
        this.emit("change");
    }
    
    
    addTodone(item) {
        this.todone.push(item);
        this.emit("change");
    }

}

let appStoreInstance = new TodoneStore();
export default appStoreInstance;
