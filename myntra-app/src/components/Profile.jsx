import React from 'react'
import { Box, Button, Divider, Flex, Heading, Image, Input, InputGroup, InputLeftAddon, Text, VStack } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import { color } from 'framer-motion';

function Profile() {
  return (
    <div>
    <Box>
      <Navbar />
      <Flex justify="center" align="center" minHeight="80vh" bg="gray.100">
        <Box
          width='500px'
          height='500px'
          bg="white"
          boxShadow="lg"
          rounded="lg"
        >
          <Image
            width='100%'
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
            alt="Profile Picture"

          />
          <Heading size="lg" m={4}>
            Login/Signup
          </Heading>
          <InputGroup m={4}>
            <InputLeftAddon colorScheme='#ff4a75'>+91</InputLeftAddon>
            <Input type='tel' placeholder='Mobile number' width='400px'/>
          </InputGroup>
          <Text m={6}>By continuing, I agree to the   <Text as="b" color="#ff4a75"> Terms of Use</Text>  &  <Text as="b" color="#ff4a75">Privacy Policy</Text></Text>
          <Box textAlign='center'><Button colorScheme='teal' variant='outline' width='180px'>Continue
          </Button></Box>
          <Flex justify="space-between" m={8}>
            <Text>Have trouble logging in?</Text>
            <Text as='b' color='#ff4a75'>Get Help</Text>
          </Flex>
        </Box>
      </Flex>
      <Divider/>
      <Footer />
    </Box>
    </div>
  )
}

export default Profile