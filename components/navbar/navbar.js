import { React } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Image,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import styles from './navbar.module.css'

const Links = [{'name': 'Career Guide', 'icon': 'https://res.cloudinary.com/ignitouch/image/upload/v1629655730/Kaloote/bagt_ccsdub.png', 'href': '#'},
               {'name': 'Interview Guide', 'icon': 'https://res.cloudinary.com/ignitouch/image/upload/v1629655730/Kaloote/interview_tazg0t.png', 'href': '/interview-guide'}
];

const NavLink = (props) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={props.link}>
    {props.children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'white'} px={4} className={styles.navbar}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={5} alignItems={'center'} justifyContent={'space-between'} style={{paddingLeft: "10px"}} w={['60%', '60%', '50%', '50%']}>
              <Image src="https://res.cloudinary.com/ignitouch/image/upload/v1629649150/Kaloote/logo_kaloote_ycrium.jpg" w="45px" h="40px" display={{ base: 'none', md: 'flex' }}></Image>
              <Input placeholder="Search"  /* display={{ base: '200px', md: '600px' }} */ />
            
            {/* <Input placeholder="Search" /> */}
          </HStack>
          <Flex alignItems={'center'}>            
            <HStack
                as={'nav'}
                spacing={5}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                <HStack spacing={0} key={link.name}> 
                  <Box>
                    <Image src={link.icon} h="25px" w="25px"></Image>
                  </Box> 
                  <NavLink link={link.href}>  
                    {link.name}
                  </NavLink>
                </HStack>
              ))}
            </HStack>            
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                style={{
                  outline:'none', 
                  border: 'none'}}>
                <Avatar
                  style={{marginRight: '10px', marginLeft: '10px'}}
                  size={'sm'}
                  src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <HStack spacing={0} key={link.name}> 
                  <Box>
                    <Image src={link.icon} h="25px" w="25px"></Image>
                  </Box> 
                  <NavLink link={link.href}> 
                  {link.name}</NavLink>
                </HStack>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>

  );
}