import React from "react";
import { Link, Flex, Box, Avatar, Text } from "@primer/components";
import Octicon, { KebabVertical, Thumbsup } from "@primer/octicons-react";
import StarRatings from "react-star-ratings";
import Center from "react-center";
class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Flex flexWrap="nowrap" width="100%">
                <Box width="12%" >
                    <Avatar src="https://avatars.githubusercontent.com/desktop" size={64} />
                </Box>
                <Box width="75%">
                    <Box>
                        am ah
                    </Box>
                    <Box>
                        <Flex flexWrap="nowrap" >
                            <Box mr={1} >
                                <StarRatings
                                    rating={4.6}
                                    starDimension="10px"
                                    starSpacing="2px"
                                />
                            </Box>
                            <Box  >
                                May 8, 2019
                            </Box>
                        </Flex>
                    </Box>
                    <Box>
                        <Text as='p'  >  تطبيق ممتاز وبارك الله فيكم وجزاكم الله خيرا.. يا ليت تضيفون للتطبيق السبحة</Text>
                    </Box>
                </Box>
                <Box width="13%" className="rest">
                    <Flex flexWrap="nowrap" >
                        <Box mr={5}>
                            <Box>
                                <Box >
                                    <Link  >
                                        <Octicon icon={Thumbsup} verticalAlign='top' size={32} bg="#6A6A6A" color="#6A6A6A" />
                                    </Link>
                                </Box>
                                <Box >
                                    <Center>
                                        <Text fontSize="12px">1</Text>
                                    </Center>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Link ><Octicon icon={KebabVertical} verticalAlign='top' size={32} bg="white" color="#6A6A6A" /></Link>
                        </Box>

                    </Flex>
                </Box>
            </Flex>
        );
    }
}
export default ReviewItem;