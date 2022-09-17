import { Box, Button, Container, Flex, Heading, HStack, Image, Link } from "@chakra-ui/react";
import Logo from './assets/logo.svg'
import Eu from './assets/eu.svg'

export function Home() {
  return (
    <Flex direction={'column'} width="1280px" align="stretch" margin="0 auto">
      <Flex h={20} p={5} direction={["column", "row"]} >
        <Container flex={1}>
          <Box>
            <Image 
              src={Logo} 
              maxW={100} 
              borderRadius="100%" 
              alt="pedroHenDev" 
            />
          </Box>
        </Container>
        <Container 
          display="flex"
          alignItems="center"
          flex={1}
          justifyContent="center"
        >
          <Flex 
            w="100%" 
            justifyContent="space-between" 
            direction={["column", "row"]} 
            align="center"
          >
            <Link 
              color='brand.darkLiver' 
              fontSize="large" 
              fontWeight="bold"
            >
              Home
            </Link>
            <Link 
              color='brand.darkLiver' 
              fontSize="large" 
              fontWeight="bold"
            >
              Sobre mim
            </Link>
            <Link 
              color='brand.darkLiver' 
              fontSize="large" 
              fontWeight="bold"
            >
              Services
            </Link>
            <Button 
              colorScheme='brand.atomicTangerine' 
              color="brand.atomicTangerine" 
              variant='outline'
              border="2px"
              _hover={{
                bg: "brand.atomicTangerine",
                colorScheme: "brand.lightGoldenrodYellow",
                color: "brand.lightGoldenrodYellow"
              }}
            >
              Contact Us
            </Button>
          </Flex>
        </Container>
      </Flex>
      <Flex h="50vh">
        <Flex
          direction="column"
          justify="space-between"
          align="center"
          flex="1"
        >
          <Container>
            <Heading>Olá, meu nome é Pedro</Heading>
          </Container>
          <Container>

          </Container>
          <Flex>

          </Flex>
        </Flex>
        <Flex flex="1">
          <Image src={Eu}></Image>
        </Flex>
      </Flex>
    </Flex>
  )
}