import React from "react";
import './../index.css';
import { Heading, Flex, Box, CircleOcticon, Text } from "@primer/components";
import { Person } from "@primer/octicons-react";
import StarRatings from "react-star-ratings";
import Center from "react-center";
// The polls count part of the Poll Service
class PollsCount extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var total;
        var rate;

        if (Object.keys(this.props.data).length !== 0) {
            console.log(this.props)
            total = this.props.data.ones + this.props.data.tows + this.props.data.threes + this.props.data.fours + this.props.data.fives;
            rate = ((this.props.data.ones * 1) + (this.props.data.tows * 2) + (this.props.data.threes * 3) + (this.props.data.fours * 4) + (this.props.data.fives * 5)) / total;
            console.log('total', total);
            console.log('rate', rate);
        }

        return (
            <Box width="100%" >
                <Box width="100%" height="50px">
                    <Center height="20px">
                        <Heading className="rate" >{(rate) ? rate.toFixed(1) : 0}</Heading>
                    </Center>
                </Box>
                <Box width="100%" >
                    <Center height="20px">
                        <StarRatings
                            rating={(rate) ? rate : 0}
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
                                <Text >{(total) ? total : "0"} Total</Text>
                            </Box>
                        </Flex>
                    </Center>
                </Box>
            </Box>
        );
    }
}

export default PollsCount;