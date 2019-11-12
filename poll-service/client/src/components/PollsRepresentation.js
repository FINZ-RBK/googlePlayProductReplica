import React from "react";
import './../App.css';

import { Box, Flex, Text, ProgressBar } from "@primer/components";

class PollsRepresentation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                        <ProgressBar progress={100} className="progressBar" bg="#7CC9A2" />
                    </Box>
                    <Box pt={1} width="100%">
                        <ProgressBar progress={30} className="progressBar" bg="#9ace6a" />
                    </Box >
                    <Box pt={1} width="100%">
                        <ProgressBar progress={20} className="progressBar" bg="#ffcf02" />
                    </Box>
                    <Box pt={1} width="100%">
                        <ProgressBar progress={10} className="progressBar" bg="#737373" />
                    </Box>
                    <Box pt={1} width="100%">
                        <ProgressBar progress={4} className="progressBar" bg="#ff6f31" />
                    </Box>
                </Box>

            </Flex>
        );
    }
}
export default PollsRepresentation;