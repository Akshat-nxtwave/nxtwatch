import React from 'react'
import { Container, Button, LogoLink } from './styles'
import Logo from '../Logo'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/context'

import { FaMoon, FaSun,FaUserCircle } from "react-icons/fa";
const TitleBar = ({setIsOpen, show = false}) => {
  
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    show &&
    <Container isDark={isDark}>
        <LogoLink to="/" style={{ padding: "20px 50px", flexGrow: '1' }}> 

         <Logo 
          width="150px"
          url={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${
            isDark ? "dark" : "light"
          }-theme-img.png`}
          />
          </LogoLink>
         <Logo
          role="presentation"
          onClick={()=>setIsDark(!isDark)}
          style={{ padding: "20px" }}
          width="150px"
          component={isDark?<FaSun size="30px"/>:<FaMoon size="30px"/>}
        />
        <Logo
          style={{ padding: "20px" }}
          width="150px"
          component={<FaUserCircle size="30px"/>}
        />
        <Button isDark={isDark} onClick={()=>setIsOpen(true)}>Logout</Button>
    </Container>
  )
}

export default TitleBar