import React from "react";
import { Flex, Box } from "@primer/components";
import PollsCount from "./PollsCount";
import PollsRepresentation from "./PollsRepresentation";

class PollsResults extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Flex flexWrap="nowrap" width="100%">
                <Box pt={3} width="30%" >
                    <PollsCount data={this.props} />
                </Box>
                <Box pt={3} width="70%">
                    <PollsRepresentation data={this.props} />
                </Box>
            </Flex>
        );
    }
}
export default PollsResults;