import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import {AiOutlineBulb,AiOutlineUser,AiOutlineMail,AiOutlineSetting,AiOutlineShoppingCart,AiFillBulb,AiOutlineStar} from "react-icons/ai"
import {MdOutlineTask,MdOutlineLogin} from "react-icons/md"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {RiSearchLine } from "react-icons/ri"
import AllRoutes from '../Routes/AllRoutes';
import { BiLogOut, BiLayout, BiHeart } from "react-icons/bi";
import { TbLayoutGridAdd, TbCube, TbMessages, TbUsers } from "react-icons/tb";
import { LuCircleDot, LuFile, LuLayoutGrid } from "react-icons/lu";
import { PiBasket, PiShootingStarLight, PiLightbulbThin } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { HiOutlineHome } from "react-icons/hi";
import { CiShoppingBasket } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { LiaFlagUsaSolid } from "react-icons/lia";



const LinkItems = [
  
 
  { name: 'Dashboards', icon: HiOutlineHome },
  { name: 'Widgets', icon: TbLayoutGridAdd },
  { name: 'Page Layout', icon: BiLayout },
  { name: 'Project', icon: LuCircleDot },
  { name: 'File Manager', icon: LuFile },
  { name: 'Kanban Board', icon: TbCube },

  { name: 'Ecommerce', icon: PiBasket },
  { name: 'Letter Box', icon: GoMail },
  { name: 'Chat', icon: TbMessages },
  { name: 'Users', icon: TbUsers },
  { name: 'Bookmarks', icon: BiHeart },

  { name: 'Explore', icon: FiCompass },
 

  
];

export default function Navbar({children,}) {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    

  return (
    <Box minH="100vh" >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
      <AllRoutes/>
      </Box>
      {/* <AllRoutes/> */}
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
     
      pos="fixed"
      h="full"
     
      
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
       <Box >
           <Image src="https://admin.pixelstrap.com/cuba/assets/images/logo/logo.png" />
       </Box>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
    const { colorMode, toggleColorMode } = useColorMode();


  return (
    
    <Flex
      
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
     
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text> */}

      <HStack spacing={{ base: '5' ,md: '4', lg: '10'}}>
      <RiSearchLine style={{height:"23px",width:"20px"}}/>

      <AiOutlineStar style={{height:"23px",width:"20px"}}/>
      <button onClick={toggleColorMode}>
                {colorMode === 'light' ? <AiOutlineBulb style={{height:"23px",width:"21px"}} /> : <AiFillBulb style={{height:"23px",width:"21px",color:"white"}} />}
      </button>
        <AiOutlineShoppingCart style={{height:"23px",width:"20px"}}/>
        <FiBell  style={{height:"23px",width:"20px"}}/>
         {/* <IconButton
          size="lg"
          //variant="ghost"
          //aria-label="open menu"
          icon={<FiBell />}
        /> */}
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://avatars.githubusercontent.com/u/103144321?v=4'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Shivang kumar</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem display={"flex"} >
               <AiOutlineUser style={{height:"23px",width:"25px"}}/>
                <Text ml="10px" fontFamily={"sans-serif"}> ACCOUNT</Text>
               
              </MenuItem>
              <MenuItem>
              <AiOutlineMail style={{height:"23px",width:"25px"}}/>
                <Text ml="10px" fontFamily={"sans-serif"}> INBOX</Text>
              </MenuItem>
              <MenuItem>
              <MdOutlineTask style={{height:"23px",width:"25px"}}/>
                <Text ml="8px" fontFamily={"sans-serif"}> TASKBOARD</Text>
              </MenuItem>
              <MenuItem>
              <AiOutlineSetting style={{height:"23px",width:"25px"}}/>
                <Text ml="8px" fontFamily={"sans-serif"}> TASKBOARD</Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
              <MdOutlineLogin style={{height:"25px",width:"25px"}}/>
                <Text ml="10px" fontFamily={"sans-serif"}> LOGIN</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};