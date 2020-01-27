import React from 'react';
import './App.css';
import Header from "./components/Header";
import PollsResults from "./components/PollsResults";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import { Box } from "@primer/components";
import axios from 'axios';
// The container of all components in the Poll Service
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: {}
    };
  }
  
  // Get the data from the database.
  fetchData() {

    var path = window.location.href;
    var id;

    if (path.indexOf("itemid") >= 0) {
      var startIndex = path.indexOf("=");
      id = path.substring(startIndex + 1)
    } else {
      id = 1;
    }

    var that = this;
    // call to the server
    axios.get(`/reviewsApi/reviewById/${id}`)
      .then(response => {
        console.log('hello', response.data);
        that.setState({
          reviews: response.data
        })
      })
      .catch(e => {
        console.log(e);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prev) {
    if (prev.reviews !== this.props.reviews) {
      this.fetchData();
    }
  }

  render() {

    return (
      <Box className="serve-container">
        <Box><hr /></Box>
        <Box><Header /></Box>
        <Box><PollsResults results={(this.state.reviews) ? this.state.reviews : ""} /></Box>
        <Box><Reviews comments={(this.state.reviews) ? this.state.reviews : ""} /></Box>
        <Box> <Footer /></Box>
        <Box><hr /></Box>
      </Box >
    );
  }

}

export default App;
