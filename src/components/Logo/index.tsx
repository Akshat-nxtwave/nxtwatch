import React from 'react'
import { Container } from './styles';

type LogoProps = {
  component?: React.ReactElement | null
  Component?: React.ReactElement | null
  url?: string | null
  width?: string
  height?: string 
  style?: React.CSSProperties
  size?: string
  onClick?: ()=>void
  
}

const Logo = ({component = null, Component, url = null, width = "100px", height = "100%", ...rest}: LogoProps) => {
  
  if(!url) {
    return <Container {...rest}>
      {component}
    </Container>
  }
  
  return (
    <Container {...rest}><img src={url} alt="logo" width={width} height={height} /></Container>
  )
}

export default Logo