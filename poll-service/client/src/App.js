import React from 'react';
import './App.css';
import Header from "./components/Header";
import PollsResults from "./components/PollsResults";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import { Box } from "@primer/components";
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      reviews: {}
    };

  }
  fetchDataWithAxios = (id) => {
    this.setState({ ...this.state, isFetching: true });
    axios.axios.get(`/reviewsApi/reviewById/${id}`)
      .then(response => {
        this.setState({ reviews: response.data, isFetching: false })
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  };
  fetchData = this.fetchDataWithAxios;
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
