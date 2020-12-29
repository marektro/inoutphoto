import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const DroneGalleryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    // height: 100vh;
    background: black;
`;

const DroneGalleryText = styled.div`
    background: rgba(0,0,0,0.8);
    padding: 20px;
    max-width: 800px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
    position: sticky;
    top: 90px;

    p {
        color: white;
        text-align: center;
        font-size: 1.5rem;
    }
`;

const DroneGalleryGrid = styled.ul`
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

const DroneGallery = () => (
    <DroneGalleryWrapper>
        <DroneGalleryText>
            <h2>Zdjęcia i Filmy z Drona</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                qui officia deserunt mollit anim id est laborum.</p>
        </DroneGalleryText>
        <DroneGalleryGrid>
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
            </li>
        </DroneGalleryGrid>
    </DroneGalleryWrapper>
);

export default DroneGallery;