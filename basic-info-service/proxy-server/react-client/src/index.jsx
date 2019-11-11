import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  Box,
  Button,
  ButtonPrimary,
  Heading,
  Link,
  Avatar,
  Text
} from '@primer/components';
import {ThemeProvider} from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }
  render () {
    const theme = {};
    return (
      <div>
      <ThemeProvider theme={theme}>
        <div>
        <Heading fontSize={1} mb={2}>Telegram</Heading>
        <Avatar mb={4} src="https://lh3.googleusercontent.com/RGVSc1UGfPtDeAgRa6ldIdehLAUK4Mw2a_oVjUlbXsswiQ_nVAq5v7WA9HtoLVCmPg=s180-rw" size={128} />
        <Link mb={1} href="https://play.google.com/store/apps/developer?id=Telegram+FZ-LLC">Telegram FZ-LLC</Link>
          <ButtonPrimary>Install</ButtonPrimary>
        </div>
      </ThemeProvider>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('proxy-basic'));