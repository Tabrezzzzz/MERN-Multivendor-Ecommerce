import React from 'react'
import { Navbar } from '../components/Navbar'
import { Loginform } from '../components/Loginform';
import { Routes, Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
<<<<<<< HEAD
    Input   
  } from '@chakra-ui/react'  
=======
    Input,   
    Box,
    Text
  } from '@chakra-ui/react'
  import { useFormik } from 'formik';
import axios from '../API Server/axios';




>>>>>>> 69116cbfd4a5f7ec664d8e5847ef7838ddcbf1be
  export const LoginRegister = () => {

    const formik = useFormik({
      initialValues: {
        username: '',
        password:''
      },
      onSubmit: async(values) => {
        try{
          const res = await axios.post("/api/customer/customer-login", values)
          console.log(res)
        }catch(error){
          console.log(error)
        }
        
      },
    });

    const handleLogin = (e) => {
      e.preventDefault()
      
    }
    return (
  <>
    <Navbar />
<<<<<<< HEAD
    <Loginform />
  
=======
    <Box>
  <Box width={"500px"} boxShadow="2px 2px 10px #00000042" padding={"20px"} mt="150px" ms="150px" borderRadius={"10px"} bgImage="radial-gradient(#fecd21, #f47412)" color={"white !important"}>
  <Text mb="20px" fontSize={"30px"} fontWeight={500} textAlign={"center"}>LOGIN</Text>
  <form onSubmit={formik.handleSubmit}>
  <FormControl >
  <FormLabel>Username</FormLabel>
  <Input name='username' type='text' onChange={formik.handleChange} value={formik.values.username} />
  <FormLabel>Password</FormLabel>
  <Input name='password' onChange={formik.handleChange} value={formik.values.password} type='password' />
  <Input type={"submit"} value="LOGIN" mt={"20px"} cursor="pointer"/>
</FormControl>
</form>
</Box>
</Box>
>>>>>>> 69116cbfd4a5f7ec664d8e5847ef7838ddcbf1be
</>
 )
}
