import { Box,  Flex, IconButton, Img, Input, InputGroup, InputLeftElement, Link,Text, VStack} from '@chakra-ui/react'
import { Link as RouterLink,useNavigate} from 'react-router-dom';
import { FaSearch, FaRegHeart, FaShoppingBag, FaUser } from 'react-icons/fa';
import React from 'react'
import './Navbar.css'
import myntralogo from '../assets/myntra-logo.png'

function Navbar() {
  return (
    <div>
        <Flex className='navbar'>
        <Flex className='navbar-container'>
            <Box className='navbar-logo'>
            <RouterLink to='/'>
            <Img src={myntralogo} height={{ base: '30px', md: '40px' }} alt="Myntra Logo" />
          </RouterLink>
            </Box>
            <Flex display={{ base: 'none', md: 'flex' }} className='navbar-links'ml={14}>
                <RouterLink to='/men'><Link className='navbar-link'>MEN</Link></RouterLink>
                <RouterLink to='/women'><Link className='navbar-link'>WOMEN</Link></RouterLink>
                <RouterLink to="/kids" ><Link className='navbar-link'>KIDS</Link></RouterLink>
                <RouterLink to="/home&living"><Link  className='navbar-link'>HOME&LIVING</Link></RouterLink>
                <RouterLink to="/beauty"><Link  className='navbar-link'>BEAUTY</Link></RouterLink>
                <RouterLink to="/studio"><Link  className='navbar-link'>STUDIO</Link></RouterLink>
            </Flex>
        <Flex ml={{ base: 2, md: 8 }} width={{ base: 'full', md: 'auto' }} justifyContent={{ base: 'center', md: 'flex-start' }} className="navbar-actions" >
        <InputGroup width={{ base: '100%', md: '500px' }} height='auto'>
            <InputLeftElement
              pointerEvents="none"
              children={<IconButton icon={<FaSearch />} aria-label="Search" variant='unstyled' ml="15px"/>}
            />
            <Input className="navbar-search" placeholder="Search for products,brands and more" />
          </InputGroup>
        </Flex>
        <Flex className='navbar-icons'ml={{ base: 2, md: 8 }} p={1.5}>
            <VStack spacing={1} alignItems="center" ml={4}>
                <IconButton icon={<FaUser />} aria-label="Profile" />
                <RouterLink to='/profile'><Link>Profile</Link></RouterLink>
            </VStack>
            <VStack spacing={1} alignItems="center"  ml={{ base: 2, md: 4 }}>
                <IconButton icon={<FaRegHeart />} aria-label="Wishlist" />
                <RouterLink to='/wishlist'><Link>Wishlist</Link></RouterLink>
            </VStack>
            <VStack spacing={1} alignItems="center"  ml={{ base: 2, md: 4 }}>
                <IconButton icon={<FaShoppingBag />} aria-label="Bag" />
                <RouterLink to='/bag'><Link>Bag</Link></RouterLink>
            </VStack>
        </Flex>
        </Flex>
        </Flex>
    </div>
  )
}

export default Navbar