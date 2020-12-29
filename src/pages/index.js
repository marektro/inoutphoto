import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Triptych from "../components/Triptych/Triptych"
import DroneGallery from "../components/DroneGallery/DroneGallery"
import InteriorsGallery from "../components/InteriorsGallery/InteriorsGallery"
import VirtualToursGallery from "../components/VirtualToursGallery/VirtualToursGallery"

const IndexPage = () => (
  <>
    <Triptych />
    <DroneGallery />
    <InteriorsGallery />
    <VirtualToursGallery />

    {/* 
    <About />
    <Contact />
    <Partners /> */}
  </>
);

export default IndexPage
