import React from "react";
import './../App.css';

import { Box, Flex, Text, ProgressBar } from "@primer/components";

class PollsRepresentation extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        var total = this.props.data.ones + this.props.data.tows + this.props.data.threes + this.props.data.fours + this.props.data.fives;
        var onesPercent = (this.props.data.ones / total) * 100;
        var twosPercent = (this.props.data.tows / total) * 100;
        var threesPercent = (this.props.data.threes / total) * 100;
        var foursPercent = (this.props.data.fours / total) * 100;
        var fivesPercent = (this.props.data.fives / total) * 100;

        return (

            <Flex flexWrap="nowrap">
                <Box width="3%">
                    <Box >
                        <Text fontSize="12px"> 1</Text>
                    </Box>
                    <Box >
                        <Text fontSize="12px"> 2</Text>
                    </Box>
                    <Box >
                        <Text fontSize="12px"> 3</Text>
                    </Box>
                    <Box >
                        <Text fontSize="12px"> 4</Text>
                    </Box>
                    <Box >
                        <Text fontSize="12px"> 5</Text>
                    </Box>

                </Box>
                <Box width="97%">
                    <Box pt={1} bg="white" >
                        <ProgressBar progress={onesPercent} className="progressBar" bg="#7CC9A2" />
                    </Box>
                    <Box pt={1} width="100%">
                        <ProgressBar progress={twosPercent} className="progressBar" bg="#9ace6a" />
                    </Box >
                    <Box pt={1} width="100%">
                        <ProgressBar progress={threesPercent} className="progressBar" bg="#ffcf02" />
                    </Box>
                    <Box pt={1} width="100%">
                        <ProgressBar progress={foursPercent} className="progressBar" bg="#737373" />
                    </Box>
                    <Box pt={1} width="100%">
                        <ProgressBar progress={fivesPercent} className="progressBar" bg="#ff6f31" />
                    </Box>
                </Box>

            </Flex>
        );
    }
}
export default PollsRepresentation;