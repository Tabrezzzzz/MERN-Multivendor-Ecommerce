import React from 'react'
import { Navbar } from '../components/Navbar'
import { Categories} from '../components/Categories'
import { Product } from '../components/Product'

export const Home = () => {
  return (
    <>
    <Navbar />
    <Categories />
    <Product  />
    </>
    
  )
}
