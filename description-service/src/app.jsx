// // a styled component objects for the css
import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid #f8f5ff;
  border-radius: 10px;
  font-family: Scheherazade, Arial, Helvetica, sans-serif;
  word-wrap: break-word;
`;

const Div = styled.div`
  font-size: 0.8em;
  margin: 0.5em;
  padding: 0.25em 1em;

  display: block;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;
  font-family: Scheherazade, Arial, Helvetica, sans-serif;
  line-height: 3.6;

  word-wrap: break-word;
`;

const Divall = styled.div`
  font-size: 0.8em;
  margin: 0.5em;
  padding: 0.25em 1em;
  font-family: Scheherazade, Arial, Helvetica, sans-serif;
  line-height: 3.6;
  display: block;
  height: 100%;
  text-overflow: ellipsis;
  white-space: pre-line;
`;
const NotFounded = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-size: 2.2em;
  color: #ada5a5;
  display: block;
  text-overflow: ellipsis;
  padding: 0.25em 1em;
  padding: 5px;
  height: 100%;
`;

const InnerDv = styled.button`
  font-size: 1.2em;
  padding: 0.25em 1em;
  border-radius: 0px;
  border: none;
  background: none;
  width: 100%;
  height: 65px;
  border-radius: 5px 10px;
  color: #33691e;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Discription: "",
      userId: 0,
      openreadmoe: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // function to Handel button click and chang the ShowMore state
  handleClick(e) {
    this.setState({
      openreadmoe: !this.state.openreadmoe
    });
    console.log(this.state.openreadmoe);
  }

  /// a lifcycle function fiers when the Dom is Mounted to Html Page
  componentDidMount() {
    var itemId = 1;
    var windowurl = window.location.href;
    if (windowurl.indexOf("itemid") > 0) {
      itemId = windowurl.substring(
        windowurl.indexOf("itemid") + "itemid".length + 1,
        windowurl.length
      );
    }
    console.log(itemId);
    /*
    Case one :if the url of the page conatins a parameter of itemid
    the component will aske the data pase to get the data of this id item and then bound it to the component

    seound case: if the url has no itemid parameter and there id no data pounded to this component props
    then i will give it an intial value for the itemid and get the data form the database

    third case : if there is a data bounded to the props already then give it to the compnent in a reglar way*/
    if (
      typeof this.props.userId === "undefined" ||
      typeof this.props.userId === "null"
    ) {
      var that = this;
      console.log(itemId);
      /// send and aget request to get the info of the id
      $.ajax({
        url: "https://agile-waters-08360.herokuapp.com/discrp",
        type: "GET",
        data: { userId: parseInt(itemId) },
        datatype: "apllication/json",
        success: function(response) {
          // putting the value of success response to this comp state
          if (response.data) {
            that.setState({
              userId: response.data.userID,
              Discription: response.data.description
            });
          }
        },
        error: function(error) {
          alert(error);
        }
      });
    } else {
      // this is the third Case when there is already item id sent to the user
      this.setState({
        userId: this.props.userId
      });

      $.ajax({
        url: "https://agile-waters-08360.herokuapp.com/discrp",
        type: "GET",
        data: { userId: that.state.userId },
        datatype: "apllication/json",
        success: function(response) {
          console.log("sucssed");
          that.setState({
            Discription: response.Discription
          });
        },
        error: function(error) {
          alert(error);
        }
      });
    }
  }

  render() {
    return (
      <Container>
        {/* if the state of read more is false then load styled-component of hiegt 100% */}
        {/* if the state of read more is true then  load styled-component of hiegt 100px%  */}
        {!this.state.openreadmoe ? (
          <Div>
            {this.state.Discription ? (
              <p> {this.state.Discription} </p>
            ) : (
              <NotFounded> Item Not Founded</NotFounded>
            )}
          </Div>
        ) : (
          <Divall>
            {this.state.Discription ? (
              <p> {this.state.Discription} </p>
            ) : (
              <NotFounded> Item Not Founded</NotFounded>
            )}
          </Divall>
        )}
        {/* if the state of read more is false then text will be less */}
        {/* if the state of read more is true then text will be read More */}
        {!this.state.openreadmoe ? (
          <InnerDv onClick={this.handleClick}>read more</InnerDv>
        ) : (
          <InnerDv onClick={this.handleClick}>Less</InnerDv>
        )}
      </Container>
    );
  }
}

// writing in the DOM object
ReactDOM.render(<App></App>, document.getElementById("Discrption"));
