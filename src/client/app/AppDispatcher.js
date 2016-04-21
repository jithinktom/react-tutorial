import { Dispatcher } from 'flux';

let AppDispatcher = new Dispatcher();

// Register callback with AppDispatcher

window.AppDispatcher = AppDispatcher;

export default AppDispatcher;