import React from "react";
import { Box } from "@primer/components";
import ReviewItem from "./ReviewItem.js";

class Reviews extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Box width="100%" mt={2}>
                {/* loop throught the reviews form database to generate one foreach item */}
                <Box >
                    <ReviewItem />
                </Box>
            </Box>
        );
    }
}
export default Reviews;