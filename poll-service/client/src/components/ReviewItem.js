import React from "react";
import './../App.css';
import { Link, Flex, Box, Avatar, Text } from "@primer/components";
import Octicon, { KebabVertical, Thumbsup } from "@primer/octicons-react";
import StarRatings from "react-star-ratings";
import Center from "react-center";
// The review item part of the reviews panel in the Poll Service
class ReviewItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var date = new Date(this.props.item.inserted);
        var stringDate = date.getMonth() + " " + date.getDate() + ", " + date.getFullYear();

        return (
            <Flex flexWrap="nowrap" width="100%">
                <Box width="9%" >
                    <Avatar src={this.props.item.userAvatar} size={48} />
                </Box>
                <Box width="78%">
                    <Box>
                        {this.props.item.userName}
                    </Box>
                    <Box>
                        <Flex flexWrap="nowrap" >
                            <Box mr={1} >
                                <StarRatings
                                    rating={this.props.item.rate}
                                    starDimension="10px"
                                    starSpacing="2px"
                                />
                            </Box>
                            <Box  >
                                {stringDate}
                            </Box>
                        </Flex>
                    </Box>
                    <Box>
                        <Text as='p'  >{this.props.item.comment}</Text>
                    </Box>
                </Box>
                <Box width="13%" className="rest">
                    <Flex flexWrap="nowrap" >
                        <Box mr={5}>
                            <Box>
                                <Box >
                                    <Link  >
                                        <Octicon icon={Thumbsup} verticalAlign='top' size={32} bg="#6A6A6A" color="#6A6A6A" />
                                    </Link>
                                </Box>
                                <Box >
                                    <Center>
                                        <Text fontSize="12px"> {this.props.item.likesCount}</Text>
                                    </Center>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Link ><Octicon icon={KebabVertical} verticalAlign='top' size={32} bg="white" color="#6A6A6A" /></Link>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        );
    }
}

export default ReviewItem;