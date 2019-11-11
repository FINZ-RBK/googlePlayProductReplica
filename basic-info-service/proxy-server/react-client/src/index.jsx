import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';
import Octicon, {Person, Info, Plus} from "@primer/octicons-react";
import {
  Box,
  Flex,
  Label,
  Tooltip,
  ButtonPrimary,
  Heading,
  Link,
  Avatar
} from '@primer/components';
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
      {/* <ThemeProvider theme={theme}>
        <div>
        <Heading fontSize={1} mb={2}>Telegram</Heading>
        
        <Link mb={1} href="https://play.google.com/store/apps/developer?id=Telegram+FZ-LLC">Telegram FZ-LLC</Link>
          <ButtonPrimary>Install</ButtonPrimary>
        </div>
      </ThemeProvider> */}
       <Flex flexWrap="nowrap">
        <Box p={5}>
        <Avatar mb={4} src="https://lh3.googleusercontent.com/RGVSc1UGfPtDeAgRa6ldIdehLAUK4Mw2a_oVjUlbXsswiQ_nVAq5v7WA9HtoLVCmPg=s180-rw" size={128} />
        </Box>
        <Box p={5}>
        <Box> <Heading fontSize={3} mb={2} color="#212121">أورادي | Awrady</Heading></Box>
        <Box>
        <span>
        <Link mb={1} href="/store/apps/developer?id=Awrady" color="#33691e" fontWeight="700">Awrady</Link>          
          </span>
          <span><Link mb={1} href="/store/apps/category/LIFESTYLE" color="#33691e" fontWeight="700">Lifestyle</Link></span> 
      </Box>
      <Box>
          <img src="https://lh3.googleusercontent.com/EbEX3AN4FC4pu3lsElAHCiksluOVU8OgkgtWC43-wmm_aHVq2D65FmEM97bPexilUAvlAY5_4ARH8Tb3RxQ=s14-rw" aria-hidden="true" alt="Rated for 3+"></img>
      </Box>  
      <Box>          
        <Octicon icon={Info} verticalAlign='middle' size={15} bg="#689f38" color="#689f38" />
        <Tooltip aria-label="This app is compatible with your device.">This app is compatible with your device.</Tooltip>
      </Box>         
      <Box>          
        <Octicon icon={Plus} verticalAlign='middle' size={15} bg="#689f38" color="#33691e" />
        <Label m={1} bg="#FFFFFF" color="#33691e">Add to Wishlist</Label>
      </Box>      
        </Box>
        <Box p={5}>
          <Box p={3}>
          <StarRatings
            rating={4.6}
            starDimension="10px"
            starSpacing="1px"
            />
          <Label m={1} bg="#FFFFFF" color="#6D827A">262</Label>
          <Octicon icon={Person} verticalAlign='top' size={15} bg="#6D827A" color="#6D827A" />
          </Box>
          <Box p={3}>
            <ButtonPrimary>Install</ButtonPrimary>
          </Box>
        </Box>
      </Flex>      
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('proxy-basic'));