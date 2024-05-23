import React, { useContext } from 'react'
import { Container } from './styles';
import ErrorContainer from '../ErrorContainer';
import { ThemeContext } from '../../Context/context';
const NoRouteFound = () => {
  const {isDark} = useContext(ThemeContext)
  return (
    <Container isDark={isDark}>
          <ErrorContainer
          mainImage={`https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-${
            isDark ? "dark" : "light"
          }-theme-img.png`}
          mainHeading={"OOPS! Something Went Wrong"}
          descriptionText={
            "We are having some trouble to complete your request. Please Try Again."
          }
          buttonText={"Retry"}
        /> 
    </Container>
  )
}


export default NoRouteFound