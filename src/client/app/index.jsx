import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './defaultcomponent.jsx';
import SidebarComponent from './sidebarcomponent.jsx';

class App extends React.Component {
  render () {
    return <div> <SidebarComponent />  <AwesomeComponent /></div>;
  }
}

render(<App/>, document.getElementById('app'));