import React from 'react'
import { Navbar } from '../components/Navbar'
import { Categories} from '../components/Categories'
import { Routes, Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input   
  } from '@chakra-ui/react'
  export const LoginRegister = () => {
    return (
  <>
    <Navbar />
  
  <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
</>
 )
}
