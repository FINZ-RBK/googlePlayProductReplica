import React from "react";
import { Heading, Flex, Box, CircleOcticon, Link } from "@primer/components";
import { Info } from "@primer/octicons-react";
// The Header for the Poll Service
var Header = () => (
    <Flex flexWrap="nowrap">
        <Box width="80%" >
            <Heading fontSize={1} mb={2}>REVIEWS</Heading>
        </Box>
        <Box width="20%" className="rest">
            <Flex flexWrap="nowrap" ml={2} >
                <Box width="20%" mt={1} mr={1}>
                    <CircleOcticon mb={2} icon={Info} size={16} bg="#6A6A6A" color="white" />
                </Box>
                <Box width="80%">
                    <Link fontSize={1} mb={2} href="https://play.google.com/about/comment-posting-policy/">
                        Review Policy
                </Link>
                </Box>
            </Flex>
        </Box>
    </Flex>
);

export default Header;