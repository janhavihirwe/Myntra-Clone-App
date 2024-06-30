import { Box, Img, Text } from '@chakra-ui/react'
import React from 'react'
import main from '../assets/main-img.png'
import './Content.css'
import ImageGrid from './ImageGrid'

function Content() {
  return (
    <div>
        <Box>
        <Box className='img-container'>
            <Img src={main}/>
        </Box>
        <Box className='text-coupons'>
            <Text fontSize='6xl' as='b'>Shop By Category</Text>
        </Box>
        <Box>
          <ImageGrid/>
        </Box>
      </Box>
    </div>
  )
}

export default Content