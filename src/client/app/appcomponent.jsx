import React from 'react'
import AwesomeComponent from './defaultcomponent.jsx';
import SidebarComponent from './sidebarcomponent.jsx';

class AppComponent extends React.Component {
  render () {
    return (<div> <SidebarComponent />  <AwesomeComponent /></div>);
  }
}

export default AppComponent;