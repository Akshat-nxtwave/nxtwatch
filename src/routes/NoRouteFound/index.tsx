import React, { useContext } from 'react'
import { Container } from './styles';
import ErrorContainer from '../../components/ErrorContainer';
import { StoreContext } from '../../utils/ContextUtils';
const NoRouteFound = () => {
  const val = useContext(StoreContext)
  return (
    <Container isDark={val.store.isDark}>
          <ErrorContainer
          mainImage={`https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-${
            val.store.isDark ? "dark" : "light"
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