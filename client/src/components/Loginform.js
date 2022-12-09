import { Navbar } from '../components/Navbar'
import { Categories} from '../components/Categories'
import { Routes, Link, json } from "react-router-dom";
import { Formik, useFormik } from "formik";
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,  
    Heading
  } from '@chakra-ui/react'
import { Container, VStack, SimpleGrid,Box } from '@chakra-ui/react'  
import React from 'react'


export const Loginform = () => {
    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            username: '',
            password: ''
        },
        onSubmit: (values) =>{
            alert(JSON.stringify(values, null, 2))
        },  
    })
  return (
    <>
    <Container maxW='800px' bg='white' color='#262626' marginTop='30px' marginLeft='20%'>
    <SimpleGrid columns={2} spacing={0}>
     <Box height='500px'width={'700px'} className='login-form-col-1'></Box>
     <Box bg='white' height='500px'className='login-form-col-2'>
        <Heading textAlign={'center'} fontSize='25px' paddingTop={'20px'}>Create Your Account</Heading>
        <form onSubmit={formik.handleSubmit}>
            <label>Fullname</label>
            <Input 
            name='fullname'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.fullname}
           />
           <input type={"submit"} value="submit" /> 
        </form>
        </Box>
  
    </SimpleGrid>
  </Container>
  </>
  )
}
