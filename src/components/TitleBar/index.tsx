
import { SetStateAction, Dispatch } from 'react'
import { Container, Button, LogoLink } from './styles'
import Logo from '../Logo'
import { useContext } from 'react'
import { StoreContext } from '../../utils/ContextUtils'
import { FaMoon, FaSun,FaUserCircle } from "react-icons/fa";
import { observer } from 'mobx-react'
type TitleBarProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  show: boolean

}
const TitleBar = observer(({setIsOpen, show = false}: TitleBarProps) => {
  
  const val = useContext(StoreContext);
  return (
    show ?
    <Container isDark={val?.store.isDark}>
        <LogoLink to="/" style={{ padding: "20px 50px", flexGrow: '1' }}> 
        
         <Logo 
          width="150px"
          url={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${
            val?.store.isDark ? "dark" : "light"
          }-theme-img.png`}
          />
          </LogoLink>
         <Logo
          onClick={() => {val?.store.setIsDark()}}
          style={{ padding: "20px" }}
          width="150px"
          component={val?.store.isDark?<FaSun size="30px"/>:<FaMoon size="30px"/>}
        />
        <Logo
          style={{ padding: "20px" }}
          width="150px"
          component={<FaUserCircle size="30px"/>}
        />
        <Button isDark={val?.store.isDark} onClick={()=>setIsOpen(true)}>Logout</Button>
    </Container>: <></>
  )
})

export default TitleBar