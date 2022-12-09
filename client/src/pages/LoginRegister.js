import React from 'react'
import { Navbar } from '../components/Navbar'
import { Loginform } from '../components/Loginform';
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
    <Loginform />
  
</>
 )
}
