import React from "react";
import { Flex, Box } from "@primer/components";
import PollsCount from "./PollsCount";
import PollsRepresentation from "./PollsRepresentation";
// The polls Results that combine the polls count and the polls representation parts of the Poll Service
class PollsResults extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Flex flexWrap="nowrap" width="100%">
                <Box pt={3} width="30%" >
                    <PollsCount data={(this.props.results) ? this.props.results : ""} />
                </Box>
                <Box pt={3} width="70%">
                    <PollsRepresentation data={(this.props.results) ? this.props.results : ""} />
                </Box>
            </Flex>
        );
    }

}

export default PollsResults;