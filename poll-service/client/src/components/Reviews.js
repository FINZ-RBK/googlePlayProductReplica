import React from "react";
import { Box } from "@primer/components";
import ReviewItem from "./ReviewItem.js";
// The reviews panel of the Poll Service
class Reviews extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var comments = [];

        if (Array.isArray(this.props.comments.comments)) {
            comments = this.props.comments.comments;
        }

        return (
            <Box width="100%" mt={2}>
                {/* loop through the reviews form database to generate one foreach item */}
                {comments.map(item => {
                    return (
                        <Box >
                            <ReviewItem item={item} />
                        </Box>)
                })}
            </Box>
        );
    }
}

export default Reviews;