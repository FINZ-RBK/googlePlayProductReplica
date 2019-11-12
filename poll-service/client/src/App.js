import React from 'react';
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
        <Box><PollsResults /></Box>
        <Box><Reviews /></Box>
        <Box> <Footer /></Box>
        <Box><hr /></Box>
      </Box >
    );
  }

}

export default App;
