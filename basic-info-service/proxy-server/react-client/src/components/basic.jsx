import React from 'react';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';
import Octicon, {Person, Info, Plus} from "@primer/octicons-react";
import {
  Box,
  Flex,
  Grid,
  Label,
  Tooltip,
  ButtonPrimary,
  Heading,
  Link,
  Avatar
} from '@primer/components';
class Basic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {products:[]}
    // this.fetchTrans();
    this.updateState = this.updateState.bind(this);
  }
  updateState(data) {
    this.setState({products: data});
  }
  getProduct(){
    var that = this;
    $.ajax({
        url: 'https://basic-info-proxy.herokuapp.com/getProduct/?productId=' + that.props.item_id ,
        dataType: 'json',
        data: that.state.products,
        success: function(data){
            console.log("succes", data);
            that.updateState(data);
        },
        error: function(err){
            console.log("err", err);
        }
    });
  }
  componentDidUpdate(prevProps) {
    if(prevProps.item_id !== this.props.item_id) {
      this.fetchTrans();
    }
  }
  fetchTrans() {
    // console.log(this.props.item_id);
    this.getProduct();
  }
  render() {
    return(
<div>
    {this.state.products.map((itm)=>{
        return (
          <Flex key = {itm.id} flexWrap="nowrap">
          <Box p={5}>
            <Avatar mb={4} src={itm.mainImage} size={128} />
          </Box>
          <Box p={5}>
          <Box> <Heading fontSize={3} mb={2} color="#212121">{itm.title}</Heading></Box>
          <Box>
          <Grid gridTemplateColumns="repeat(2, auto)">
              <Box><span><Link mb={1} href="/store/apps/developer?id=Awrady" color="#33691e" fontWeight="700">{itm.description}</Link></span></Box>
              <Box><span><Link mb={2} href="/store/apps/category/LIFESTYLE" color="#33691e" fontWeight="700">{itm.category}</Link></span></Box>
            </Grid>
        </Box>
        <Box>
            <img src="https://lh3.googleusercontent.com/EbEX3AN4FC4pu3lsElAHCiksluOVU8OgkgtWC43-wmm_aHVq2D65FmEM97bPexilUAvlAY5_4ARH8Tb3RxQ=s14-rw" aria-hidden="true" alt="Rated for 3+"></img>
        </Box>  
        <Box>          
          <Octicon icon={Info} verticalAlign='middle' className="info" size={15} ml={5}/>
          <Tooltip aria-label="This app is compatible with your device.">This app is compatible with your device.</Tooltip>
        </Box>         
        <Box>          
          <Octicon icon={Plus} verticalAlign='middle' size={15} className='plus' />
          <Label m={1} bg="#FFFFFF" color="#33691e">Add to Wishlist</Label>
        </Box>      
          </Box>
          <Box p={5}>
            <Box>
            <StarRatings
              rating={4.6}
              starDimension="10px"
              starSpacing="1px"
              />
            <Label m={1} bg="#FFFFFF" color="#6D827A">{itm.noInstallation}</Label>
            <Octicon icon={Person} verticalAlign='top' size={15} bg="#6D827A" color="#6D827A" className="person"/>
            </Box>
            <Box></Box>
            <Box p={3}>
              <ButtonPrimary>Install</ButtonPrimary>
            </Box>
          </Box>
        </Flex>      
        )
      })}   
  </div>        
    );       
  }
}

export default Basic;
