import { Container, Img } from '@chakra-ui/react'
import { Flex, Spacer, Center, Text, Grid, GridItem, Square, Image, } from '@chakra-ui/react'
import { Input,InputGroup, InputLeftElement, } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import { FaBeer, FaCartArrowDown, FaIdBadge, FaSearch,  } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";
import grocery from "../assests/image/category/grocery.jpg"
import mobile from "../assests/image/category/mobile.jpg"
import cloth from "../assests/image/category/cloth.jpg"
import eletronic from "../assests/image/category/eletronics.webp"
import React, {useState, useEffect} from 'react'

export const Categories = () => {

  return (
    
    <Container className='category-main-container' bg='white' color='#262626' maxWidth="1500px !important"  height="160px">
        <SimpleGrid columns={8} spacing={2} marginTop='10px' paddingTop='10px'>
            <Box bg='white' height='100px'>
             <img className='category-img' src={grocery}/>
              <Text textAlign='center' className='category-text'>Grocery</Text>
            </Box>
            <Box bg='white' height='100px'>
              <img className='category-img' src={mobile}/>
              <Text textAlign='center' className='category-text'>Mobiles</Text>
            </Box>
            <Box bg='white' height='100px'>
                <img className='category-img' src={cloth} />
                <Text textAlign='center' className='category-text'>Fashion</Text>
            </Box>
            <Box bg='white' height='100px'>
            <img className='category-img' src={eletronic} />
            <Text textAlign='center' className='category-text'>Electronics</Text>
            </Box>
            <Box bg='white' height='100px'>
                <img className='category-img' src='https://itsale.in/wp-content/uploads/2020/08/boat-airpod-1.jpg'/>
                <Text textAlign='center' className='category-text'>Airpods</Text>
            </Box>
            <Box bg='white' height='100px'>
            <img className='category-img' src='https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png'/>
            <Text textAlign='center' className='category-text'>Laptop</Text>
            </Box>
            <Box bg='white' height='100px'>
            <img className='category-img' src='https://5.imimg.com/data5/DP/UE/MY-2646245/fully-automatic-washing-machine-500x500.jpg'/>
            <Text textAlign='center' className='category-text'>washing Machine</Text>
            </Box>
            <Box bg='white' height='100px'>
            <img className='category-img' src='https://m.media-amazon.com/images/I/71d5fMDvq9L._SX679_.jpg'/>
            <Text textAlign='center' className='category-text'>Television</Text>
            </Box>
        </SimpleGrid>
  </Container>
  
 
  )
}
