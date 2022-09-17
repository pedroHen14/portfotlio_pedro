import { Box, Button, Container, Flex, Heading, HStack, Icon, Image, Link, Text, VStack } from "@chakra-ui/react";
import { RandomPositionLogo } from "./components/RandomPositionLogo";
import Logo from './assets/logo.svg'
import Eu from './assets/teste.svg'
import nodeLogo from './assets/node.svg'
import reactLogo from './assets/react.png'
import linuxLogo from './assets/linux.png'
import typescriptLogo from './assets/typescript.png'
import javascriptLogo from './assets/javascript.png'
import mysqlLogo from './assets/mysql.png'
import sassLogo from './assets/sass.png'
import postgresqlLogo from './assets/postgresql.png'
import dockerLogo from './assets/docker.png'
import expressLogo from './assets/express.png'
import jestLogo from './assets/jest.png'

export function Home() {
  return (
    <Flex direction={'column'} width="1280px" align="stretch" margin="0 auto">
      <Flex h={20} p={5} direction={["column", "row"]} zIndex="999">
        <Container flex={1}>
          <Box>
            <Image
              boxShadow="dark-lg" 
              src={Logo} 
              maxW="7rem" 
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
              transition="ease-in-out all .2s"
              _hover={{
                color: "brand.atomicTangerine"
              }}
            >
              Home
            </Link>
            <Link 
              color='brand.darkLiver' 
              fontSize="large" 
              fontWeight="bold"
              transition="ease-in-out all .2s"
              _hover={{
                color: "brand.atomicTangerine"
              }}
            >
              Sobre mim
            </Link>
            <Link 
              color='brand.darkLiver' 
              fontSize="large" 
              fontWeight="bold"
              transition="ease-in-out all .2s"
              _hover={{
                color: "brand.atomicTangerine"
              }}
            >
              Services
            </Link>
            <Button 
              color="brand.atomicTangerine" 
              variant='outline'
              border="2px"
              _hover={{
                bg: "brand.atomicTangerine",
                colorScheme: "brand.lightGoldenrodYellow",
                color: "brand.lightGoldenrodYellow"
              }}
              _active={{
                transform: "scale(0.9)"
              }}
            >
              Contact Us
            </Button>
          </Flex>
        </Container>
      </Flex>
      <Flex h="60vh">
        <VStack
          justify="center"
          align="center"
          flex="1"
          spacing={10}
        >
          <Container>
            <Heading fontSize="6xl" color="brand.darkLiver" >Olá! Meu nome é<br /> <Heading color="brand.atomicTangerine" fontSize="6xl">Pedro H.</Heading></Heading>
          </Container>
          <Container>
            <Text fontSize="medium">
              Consectetur in nostrud ea dolore. Id tempor laborum nisi consectetur commodo consectetur. Dolor nisi reprehenderit ipsum voluptate incididunt qui nulla labore pariatur laboris eu.
            </Text>
          </Container>
          <Container>
              <HStack spacing={12}>
                <Button 
                  colorScheme="brand.atomicTangerine"
                  bg="brand.atomicTangerine"
                  color="white" 
                  size="lg"
                  p="0 4rem"
                  _active={{
                    transform: "scale(0.9)"
                  }}
                  boxShadow="dark-lg"
                >
                  Hire Me
                </Button>
                <Image src={nodeLogo} maxW="3rem" />
                <Image src={reactLogo} maxW="3rem" />
              </HStack>
          </Container>
          <Flex>

          </Flex>
        </VStack>
        <Flex flex="1" align="center" justify="center" position="relative">
          <Image src={Eu} maxW="70%"></Image>

          <RandomPositionLogo icon={sassLogo} top="15rem" right="5rem" />
          <RandomPositionLogo icon={dockerLogo} bottom="8rem" left="2rem" />
          <RandomPositionLogo icon={javascriptLogo} top="4rem" right="10rem" />
          <RandomPositionLogo icon={typescriptLogo} bottom="2rem" left="10rem" />
          <RandomPositionLogo icon={jestLogo} top="10rem" right="5rem" />
          <RandomPositionLogo icon={linuxLogo} top="10rem" left="4rem" />
          <RandomPositionLogo icon={mysqlLogo} bottom="3rem" right="10rem" />
          <RandomPositionLogo icon={postgresqlLogo} bottom="8rem" right="6rem" />
          <RandomPositionLogo icon={expressLogo} top="4rem" left="5rem" />
        </Flex>
      </Flex>
    </Flex>
  )
}