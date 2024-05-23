import React from 'react'
import { Container } from './styles';

const Logo = ({component = null, Component, url = null, width = "100px", height = "100%", ...rest}) => {
  
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