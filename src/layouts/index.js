import React from "react"
import styled from "styled-components"
import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation" 

const MainLayout = ({children}) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
  </>
)

export default MainLayout
