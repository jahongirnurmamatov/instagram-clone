import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react'
import React from 'react'
import { timeAgo } from '../../utils/timeAgo'
import { Link } from 'react-router-dom'
import useFollowUser from '../../hooks/useFollowUser'

const PostHeader = ({ post, creatorProfile }) => {
    const {handleFollowUser, isFollowing ,isUpdating} = useFollowUser(post.createdBy);

    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} my={2}>
            <Flex gap={2} alignItems={'center'}>
                {creatorProfile ? (<Link to={`/${creatorProfile.username}`}>
                    <Avatar src={creatorProfile?.profilePicUrl} size={'sm'} />
                </Link>) : (
                    <SkeletonCircle size={10} />
                )}


                <Flex fontSize={12} fontWeight={'bold'} gap={2}>
                    {creatorProfile ? (<><Link to={`/${creatorProfile.username}`}>
                        {creatorProfile?.username}
                    </Link>
                        <Box color={'gray.500'}> • {timeAgo(post.createdAt)}</Box>
                    </>
                    ) : (
                        <Skeleton w={'100px'} h={'10px'} />
                    )}


                </Flex>
            </Flex>
            <Box cursor={'pointer'}>
                <Button 
                size={'xs'} bg={'transparent'} onClick={handleFollowUser} isLoading={isUpdating}
                fontSize={12} color={'blue.500'} fontWeight={'bold'}
                    _hover={{
                        color: 'white'
                    }}
                    transition={'0.2s ease-in-out'}
                >
                    {isFollowing ? "Unfollow" : "Follow"}
                </Button>
            </Box>
        </Flex>
    )
}

export default PostHeader