import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import {BaseStyles, Box, Heading} from '@primer/components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }
  render () {
    return (<div>
      <h1>Basic information</h1>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('proxy-basic'));