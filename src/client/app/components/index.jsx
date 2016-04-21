import React from 'react';
import {render} from 'react-dom';
import WorkToDoComponent from './WorkToDoComponent.jsx';
import WorkDoneComponent from './WorkDoneComponent.jsx';


class App extends React.Component {
  render () {
    return (<div>	
         	<p> Work To Do (Click on a task to mark it completed)</p>
         	<WorkToDoComponent />
            <p> Work Done (Click on a done task to mark it not completed)</p>
            <WorkDoneComponent />
   		</div>)
  }
}

render(<App/>, document.getElementById('app'));

// <h1> My Tasks </h1>
//         	<p> Work To Do </p>
//         	<WorkToDoComponent />