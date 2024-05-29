import React from 'react'
import SuggestedUser from './SuggestedUser'
import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import SuggestedUserHeader from './SuggestedUserHeader'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'

const SuggestedUsers = () => {
    const { isLoading, suggestedUsers } = useGetSuggestedUsers();

    if (isLoading) return null;
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedUserHeader />
            {suggestedUsers.length !== 0 && (
                <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
                    <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
                        Suggested for you
                    </Text>
                    <Text fontSize={12} fontWeight={'bold'} _hover={{ color: 'gray.400' }} cursor={'pointer'}>
                        See all
                    </Text>
                </Flex>
            )}

            {suggestedUsers.map(user => (
                <SuggestedUser key={user.id} user={user} />
            ))}

            <Box alignSelf={'start'} fontSize={12} color={'gray.500'} mt={5}>
                2024 copyright Built by Jakhongir
            </Box>
        </VStack>
    )
}

export default SuggestedUsers