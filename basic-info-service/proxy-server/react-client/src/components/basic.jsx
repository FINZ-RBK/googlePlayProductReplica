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
  Button,
  Heading,
  Link,
  Avatar
} from '@primer/components';
import styled from 'styled-components';
import { right } from 'styled-system';
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
class Basic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {products:[],
                  rate: 0,
                  total: 0}
    // this.fetchTrans();
    this.updateState = this.updateState.bind(this);
  }
  updateState(data) {
    this.setState({products: data});

  }
  updateRate(data) {
    this.setState({rate: data});
  }
  updateTotal(data) {
    this.setState({total: data});
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
  getRate(){
    var that = this;
    var id = window.location.href.split("=")[1];
    $.ajax({
        url: 'https://protected-plains-93575.herokuapp.com/reviewsApi/getRate/'+id,
        success: function(data){
            console.log("rate ajax", data);
            console.log("rate parsed: ", data.rate)
            that.updateRate(data.rate);
            that.updateTotal(data.total);
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
    this.getProduct();
    this.getRate();
  }
  render() {
    return(
       
<div>
  {this.state.products.length !== 0 ? (
    this.state.products.map((itm)=>{
        return (
          <Flex key = {itm.id} flexWrap="nowrap" mt={3} mb={3} mr={3} ml={3}>

            <Box width="25%" pl={2}>
              <Avatar mb={4} src={itm.mainImage} size={150} />
            </Box>

            <Box width="75%">
              <Box pb={2}> 
                <Heading fontSize={3} color="#212121">{itm.title}</Heading>
              </Box>
              <Box pb={2}>
                <Flex>
                  <Box width="30%"><span><Link href={itm.descURL} color="#558045" fontSize="15px" fontWeight="700" fontFamily="Helvetica">{itm.description}</Link></span></Box>
                  <Box width="25%" pl={3}><span><Link href={itm.catURL} color="#558045" fontSize="15px" fontWeight="700" fontFamily="Helvetica">{itm.category}</Link></span></Box>
                  <Box width="45%" pl={20} style={{textAlign: 'right', verticalAlign: "right"}} pr={4}> 
                    <StarRatings
                    rating={this.state.rate? this.state.rate: 0}
                    starDimension="10px"
                    starSpacing="1px"
                    />
                    <Label bg="#FFFFFF" color="#8e908f" fontSize="9px" fontFamily="Helvetica" >{this.state.total? this.state.total: 0}</Label>
                    <Octicon icon={Person} verticalAlign='middle' size={12} className="person"/>
                  </Box>
                </Flex>               
              </Box>
              <Box pb={4}>
                <img src={itm.ageImg} aria-hidden="true" alt="Rated for 3+"></img>
              </Box>

              <Box pb={2}>          
                <Octicon icon={Info} verticalAlign='middle' className="info" size={15} ml={5} mr={5}/>
                {/* <Text fontSize={13} fontSize="Helvetica" fontWeight={300} color="#737373"></Text> */}
                <label style={{fontFamily:'Helvetica', fontSize:"12px", color:"#b1b1b1"}}>{itm.compact}</label>

              </Box>   

              <Box>
                <Flex>
                  <Box width="80%">
                    <Octicon icon={Plus} verticalAlign='middle' size={15} className='plus'/>
                    <label ml={2} style={{fontFamily:'Helvetica', fontSize:"12px", bg:"#FFFFFF", color:"#7a9d6d", marginLeft:"2px"}}>Add to Wishlist</label>
                  </Box>
                  <Box style={{textAlign: 'right', verticalAlign: "right"}} pr={4} width="20%">
                    <button style={{borderRadius:"5px", backgroundColor:"#689e38", color:"white", border: "0" , width:"70px", height:"30px"}}>Install</button>
                  </Box>
                </Flex>
              </Box>
             </Box>
        </Flex>      
        )
      })  
      ) : (<Box><NotFounded>LOADING...</NotFounded></Box>)}
  </div>        
    );       
  }
}

export default Basic;
