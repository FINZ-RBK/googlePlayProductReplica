import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import './App.css';
import Header from "./components/Header";
import PollsResults from "./components/PollsResults";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import { Box } from "@primer/components";


class App extends React.Component {
  constructor(props) {
    super(props);


  }
  render() {

    return (
      <Box className="serve-container">

        <Box><hr /></Box>
        <Box><Header /></Box>
        <Box><PollsResults results={this.props.reviews} /></Box>
        <Box><Reviews comments={this.props.reviews.comments} /></Box>
        <Box> <Footer /></Box>
        <Box><hr /></Box>
      </Box >
    );
  }

}

ReactDOM.render(<App />, document.getElementById('poll'));