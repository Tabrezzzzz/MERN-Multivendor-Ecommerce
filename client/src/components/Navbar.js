import { Container, Img } from '@chakra-ui/react'
import { Flex, Spacer, Center, Text, Grid, GridItem, Square, Image, } from '@chakra-ui/react'
import { Input,InputGroup, InputLeftElement, } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'
import { Heading } from '@chakra-ui/react'
import logo from '../assests/image/niggas.png'
import { Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import { FaBeer, FaCartArrowDown, FaIdBadge, FaSearch,  } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";

export const Navbar = () => {
  return (
    <Container  bg='#fecd21' color='#262626' maxWidth="1500px !important" margin="0px !important" height="75px">
       <Flex paddingTop="10px">
  
  <Square bg='transparent' width="20%" >
       <img className='logo' src={logo}/>
  </Square>
  <Square bg='transparent' width='40%'>
  
  <InputGroup backgroundColor="#fff" borderRadius="20px" marginTop="-10px" marginLeft="60px">
    
    <InputLeftElement
      
      pointerEvents='none'
      children={<SearchIcon color='gray.300'  />}
    />
    <Input type='text' placeholder='Search Products' />
  </InputGroup>


</Square>
  <Square bg='transparent' width='20%'>
  <Heading fontSize="17px" color="#fff" className='vendor-btn'>
      Become Seller
  </Heading>
  </Square>
   <Square bg='transparent' width='10%'>
    <FaCartArrowDown  fontSize="25px" marginTop='-10px'/>
    <Text fontWeight="700" marginLeft='5px'>Cart</Text>
  </Square>
   <Square bg='transparent' width='10%'>
      <RxAvatar fontSize='25px' marginTop='-10px'/><Text className='Login-btn'>Login</Text>
  </Square>
  
</Flex>
  </Container>
  )
}
