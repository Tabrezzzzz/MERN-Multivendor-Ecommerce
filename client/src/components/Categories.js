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
const [products, setproducts] = useState([])



useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
    .then(res=>res.json())
    .then(json=>setproducts(json))
},[])


    console.log(products)

  return (
    <>
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
  <SimpleGrid columns={4} spacing={3} marginTop='10px' paddingTop='10px' paddingLeft='50px' paddingRight='50px' paddingBottom='30px'>
  {
    products.map((e) => {
        return (
   
            <Box   
        role={'group'}
        p={6}
       h={'400px'}
        w={'300px'}
        bg='#fff'
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
           textAlign='center'
          rounded={'lg'}
          mt={10}
          pos={'relative'}
          height={'150px'}
          width={'100px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
           
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <img className='product-cards'
            rounded={'lg'}
            height={80}
            paddingLeft={'30px'}
            width={100}
            objectFit={'cover'}
            src={e.image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color='black' fontSize={'sm'} textTransform={'uppercase'}>
            {e.category}
          </Text>
          <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500} textAlign={'center'}>
            {e.title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'md'}>
              {e.price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>

        )
    })
  }
        </SimpleGrid> 
  </>
  )
}
