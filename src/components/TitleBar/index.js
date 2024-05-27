import React from 'react'
import { Container, Button, LogoLink } from './styles'
import Logo from '../Logo'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/context'

import { FaMoon, FaSun,FaUserCircle } from "react-icons/fa";
import { observer } from 'mobx-react'

const TitleBar = observer(({setIsOpen, show = false}) => {
  
  const val = useContext(ThemeContext);
  const { setIsDark } = val;
  // console.log(val.setIsDark(), 'ooooooooooopp')
  return (
    show &&
    <Container isDark={val.isDark}>
        <LogoLink to="/" style={{ padding: "20px 50px", flexGrow: '1' }}> 
        
         <Logo 
          width="150px"
          url={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${
            val.isDark ? "dark" : "light"
          }-theme-img.png`}
          />
          </LogoLink>
         <Logo
          role="presentation"
          onClick={() => {val.setIsDark()}}
          style={{ padding: "20px" }}
          width="150px"
          component={val.isDark?<FaSun size="30px"/>:<FaMoon size="30px"/>}
        />
        <Logo
          style={{ padding: "20px" }}
          width="150px"
          component={<FaUserCircle size="30px"/>}
        />
        <Button isDark={val.isDark} onClick={()=>setIsOpen(true)}>Logout</Button>
    </Container>
  )
})

export default TitleBar