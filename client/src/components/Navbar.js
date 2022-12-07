import { Container } from '@chakra-ui/react'
import { Flex, Spacer, Center, Text, Grid, GridItem, Square, Image, } from '@chakra-ui/react'
import { Input,InputGroup, InputLeftElement, } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'
import { Heading } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <Container  bg='#44c8c1' color='#262626' maxWidth="1500px !important" margin="0px !important" height="60px">
       <Flex paddingTop="10px">
  
  <Square bg='transparent' width="20%">
       Pending
  </Square>
  <Square bg='transparent' width='40%'>
  
  <InputGroup backgroundColor="#fff" borderRadius="20px">
    <InputLeftElement
      
      pointerEvents='none'
      children={<SearchIcon color='gray.300'  />}
    />
    <Input type='text' placeholder='Search Products' />
  </InputGroup>


</Square>
  <Square bg='transparent' width='20%'>
  <Heading fontSize="17px" color="#fff">
      Become Seller
  </Heading>
  </Square>
   <Square bg='transparent' width='10%'>
   <Text fontSize='xs'>(xs) cart</Text>
  </Square>
   <Square bg='yellow' width='10%'>
    <Text>Box 2</Text>
  </Square>
  
</Flex>
  </Container>
  )
}
