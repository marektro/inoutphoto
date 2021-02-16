import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const VirtualToursGalleryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    // height: 100vh;
    background: black;
`;

const VirtualToursGalleryTitle = styled.div`
background: rgba(0, 0, 0, 0.7);
padding: 10px 40px 20px 40px;
max-width: 800px;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 30px;
position: sticky;
top: 90px;
`;

const VirtualToursGalleryDescription = styled.div`
    max-width: 800px;

    p {
        color: white;
        text-align: center;
        font-size: 1.5rem;
        margin-top: 0;
    }
`;

const VirtualToursGalleryGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-template-rows: repeat(6, 250px);
    grid-gap: 1rem;
    grid-auto-flow: dense;
    list-style: none;

    li:nth-child(3n) {
        grid-column: span 1;
        grid-row: span 2;
    }

    li:nth-child(10n) {
        grid-column: span 2;
        grid-row: span 1;
    }

    li > div {
        height: 100%;
    }
    
    li > div > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const VirtualToursGallery = () => (
    <VirtualToursGalleryWrapper>
        <VirtualToursGalleryTitle>
            <h2>Wirtualne Spacery 3D</h2>
        </VirtualToursGalleryTitle>
        <VirtualToursGalleryDescription>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                qui officia deserunt mollit anim id est laborum.</p>
        </VirtualToursGalleryDescription>
        <VirtualToursGalleryGrid>
            {/* <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22942_hires.jpg" alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23021_hires.jpg" alt="A first look at dunes"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23002_hires.jpg" alt="K2-138 6 Planets Artwork (Artist's Illustration) "/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA21212_hires.jpg" alt="Small Prominences"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22983_hires.jpg" alt="Ezinu Crater"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22990_hires.jpg" alt="Polar Ice"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22963_hires.jpg" alt="Jupiter"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22918_hires.jpg" alt="Star Gaia 17pbi Seen by Spitzer"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22900_hires.jpg" alt="Another Cloudy Day"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22941_hires.jpg" alt="South Equatorial Belt Brown Barge Close-up"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22942_hires.jpg" alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23021_hires.jpg" alt="A first look at dunes"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23002_hires.jpg" alt="K2-138 6 Planets Artwork (Artist's Illustration) "/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA21212_hires.jpg" alt="Small Prominences"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22983_hires.jpg" alt="Ezinu Crater"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22990_hires.jpg" alt="Polar Ice"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22963_hires.jpg" alt="Jupiter"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22918_hires.jpg" alt="Star Gaia 17pbi Seen by Spitzer"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22900_hires.jpg" alt="Another Cloudy Day"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22941_hires.jpg" alt="South Equatorial Belt Brown Barge Close-up"/>
                </div>
            </li> */}
        </VirtualToursGalleryGrid>
    </VirtualToursGalleryWrapper>
);

export default VirtualToursGallery;