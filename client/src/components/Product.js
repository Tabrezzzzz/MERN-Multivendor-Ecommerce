import React, {useState, useEffect} from 'react'
import { SimpleGrid, Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Flex, Spacer, Center, Text, Grid, GridItem, Square, Image, Heading } from '@chakra-ui/react'
import { Container, Img } from '@chakra-ui/react'

export const Product = () => {
const [products, setproducts] = useState([])

useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
    .then(res=>res.json())
    .then(json=>setproducts(json))
},[])

    console.log(products)

  return (
    <>
    <Text textAlign={"center"} fontSize="30px" fontWeight={"600"} mt="20px">MEN'S Clothing </Text>
    <SimpleGrid columns={4} spacing={3} marginTop='10px' paddingTop='10px' paddingLeft='50px' paddingRight='50px' paddingBottom='30px'>
    {
    products.filter((e) => {
      return e.category == "men's clothing"
    }).map((e) => {
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

      <Text textAlign={"center"} fontSize="30px" fontWeight={"600"} mt="20px">WOMEN'S JEWELERY</Text>
<SimpleGrid columns={4} spacing={3} marginTop='10px' paddingTop='10px' paddingLeft='50px' paddingRight='50px' paddingBottom='30px'>
  {
    products.filter((e) => {
      return e.category == "jewelery"
    }).map((e) => {
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
        <Text textAlign={"center"} fontSize="30px" fontWeight={"600"} mt="20px">Electronics</Text>
        <SimpleGrid columns={4} spacing={3} marginTop='10px' paddingTop='10px' paddingLeft='50px' paddingRight='50px' paddingBottom='30px'>
           {
            products.filter((e) =>{
               return e.category == "electronics"
            }).map((e)=>{
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
