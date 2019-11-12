import React from "react";
import './../index.css';
import { Heading, Flex, Box, CircleOcticon, Text } from "@primer/components";
import { Person } from "@primer/octicons-react";
import StarRatings from "react-star-ratings";
import Center from "react-center";

class PollsCount extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Box width="100%" >
                <Box width="100%" height="50px">
                    <Heading className="rate" >{(this.props.rate) ? this.props.rate : "4.6"}</Heading>
                </Box>
                <Box width="100%" >
                    <Center height="20px">
                        <StarRatings
                            rating={4.6}
                            starDimension="20px"
                            starSpacing="5px"
                        />
                    </Center>

                </Box>
                <Box width="100%" >
                    <Center height="20px">
                        <Flex flexWrap="nowrap" >
                            <Box mr={1}>
                                <Text ><CircleOcticon icon={Person} size={16} bg="white" color="#6A6A6A" verticalAlign="middle" /></Text>
                            </Box>
                            <Box>
                                <Text >{(this.props.voters) ? this.props.voters : "267"} Total</Text>
                            </Box>
                        </Flex>
                    </Center>

                </Box>
            </Box>



        );
    }
}
export default PollsCount;