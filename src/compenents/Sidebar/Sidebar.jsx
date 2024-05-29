import { Avatar, Box, Button, Flex, Link, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, SearchLogo, NotificationsLogo } from '../../assets/constants'
import { Link as RouterLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
    
     const {handleLogout,  isLogginOut}= useLogout();
    return (
        <Box height={'100vh'}
            borderRight={'1px solid'} borderColor={'whiteAlpha.300'} py={8} position={'sticky'} top={0} left={0}
            px={{ base: 2, md: 4 }}>
            <Flex direction={'column'} justifyContent="space-between" w={'full'} height={'full'}>
                <Flex direction={'column'} gap={10}>
                    <Link to={'/'} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor={'pointer'}>
                        <InstagramLogo />
                    </Link>
                    <Link to={'/'} as={RouterLink} pl={2} display={{ base: "block", md: "none" }} cursor={'pointer'}
                        borderRadius={6} _hover={{
                            bg: 'whiteAlpha.200'
                        }}
                        w={{ base: 10 }}
                    >
                        <InstagramMobileLogo />
                    </Link>
                    <Flex direction={'column'} gap={5} cursor={'pointer'}>
                        <SidebarItem/>
                    </Flex>
                </Flex>
                <Tooltip
                    hasArrow
                    label={'Logout'}
                    placement='right'
                    ml={1}
                    openDelay={500}
                    display={{ base: 'block', md: 'none' }}
                >
                    {/* logout button */}
                    <Flex
                        onClick={handleLogout}
                        alignItems="center"
                        gap={4}
                        _hover={{ bg: 'whiteAlpha.400' }}
                        borderRadius={6}
                        p={2}
                        w="full"
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                    >
                        <BiLogOut size={25} />
                        <Button display={{ base: 'none', md: 'block' }}
                        variant={'ghost'} _hover={{bg:'transparent'}} isLoading={isLogginOut} onClick={handleLogout}
                        >Logout</Button>
                    </Flex>
                </Tooltip>
            </Flex>
        </Box>
    )
}

export default Sidebar
