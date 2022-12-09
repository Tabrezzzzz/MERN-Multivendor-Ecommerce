import React from 'react'
import { Navbar } from '../components/Navbar'
import { Categories} from '../components/Categories'
import { Routes, Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,   
    Box,
    Text
  } from '@chakra-ui/react'
  export const LoginRegister = () => {

    const handleLogin = (e) => {
      e.preventDefault()
      
    }
    return (
  <>
    <Navbar />
    <Box>
  <Box width={"500px"} boxShadow="2px 2px 10px #00000042" padding={"20px"} mt="150px" ms="150px" borderRadius={"10px"} bgImage="radial-gradient(#fecd21, #f47412)" color={"white !important"}>
  <Text mb="20px" fontSize={"30px"} fontWeight={500} textAlign={"center"}>LOGIN</Text>
  <form onSubmit={(e) => handleLogin(e)}>
  <FormControl >
  <FormLabel>Email Address</FormLabel>
  <Input type='email' />
  <FormLabel>Password</FormLabel>
  <Input type='password' />
  <Input type={"submit"} value="LOGIN" mt={"20px"} cursor="pointer"/>
</FormControl>
</form>
</Box>
</Box>
</>
 )
}
