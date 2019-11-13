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
          <Flex key = {itm.id} flexWrap="nowrap" mt={3}>
          <Box p={5}>
            <Avatar mb={4} src={itm.mainImage} size={150} />
          </Box>
          <Box p={5} mb={3}>
          <Box mb={3}> <Heading fontSize={3} color="#212121">{itm.title}</Heading></Box>
          <Box>
          <Grid gridTemplateColumns="repeat(2, auto)" mb={2}>
              <Box><span><Link href={itm.descURL} color="#33691e" fontWeight="700">{itm.description}</Link></span></Box>
              <Box><span><Link href={itm.catURL} color="#33691e" fontWeight="700">{itm.category}</Link></span></Box>
          </Grid>
        </Box>
        <Box mb={3}>
            <img src={itm.ageImg} aria-hidden="true" alt="Rated for 3+"></img>
        </Box>  
        <Box mb={3}>          
          <Octicon icon={Info} verticalAlign='middle' className="info" size={15} ml={5} mr={5}/>
          <Tooltip aria-label="This app is compatible with your device.">This app is compatible with your device.</Tooltip>
        </Box>         
        <Box>          
          <Octicon icon={Plus} verticalAlign='middle' size={15} className='plus' />
          <Label m={1} bg="#FFFFFF" color="#33691e">Add to Wishlist</Label>
        </Box>      
          </Box>
          <Box p={5} verticalAlign='right'>
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
            <Box p={3} mt={9}>
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
