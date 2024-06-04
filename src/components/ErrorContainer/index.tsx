import React from 'react'
import { Container, Heading, Description, Button } from './styles';
import Logo from '../Logo';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/ContextUtils';
type ErrorContainerProps = {
  mainImage: string | null | undefined,
  mainHeading: string,
  descriptionText: string,
  buttonText?: string,
  clickHandler?: React.MouseEventHandler | (() => void)
}
const ErrorContainer = ({mainImage, mainHeading, descriptionText="", buttonText, clickHandler=()=>{}}:ErrorContainerProps) => {
  const val = useContext(ThemeContext);
  return (
    <Container>
        {mainHeading?<Logo url={mainImage} width="auto" height="300px"/>:null}
        <Heading isDark={val.store.isDark}>{mainHeading}</Heading>
        <Description isDark={val.store.isDark}>{descriptionText}</Description>
        {buttonText?<Button onClick={clickHandler}>{buttonText}</Button>:null}
    </Container>
  )
}

export default ErrorContainer