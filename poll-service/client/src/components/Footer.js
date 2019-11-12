import React from "react";
import { Flex, Box, Link } from "@primer/components";

var Footer = () => (
    <Flex flexWrap="nowrap" alignItems="center">
        <Box width="35%" >  </Box>
        <Box width="30%" alignItems="middle">
            <Link color="#33691e" href="https://play.google.com/store/apps/details?id=com.newline.app.awrady&showAllReviews=true">
                READ ALL REVIEWS
            </Link>
        </Box>
        <Box width="35%" >  </Box>
    </Flex>
);
export default Footer;