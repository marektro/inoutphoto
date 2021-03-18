import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { graphql } from "gatsby"

// const Drones = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

// export const query = graphql`

// query HomeQuery {
//   {
//     allDatoCmsZdjecie {
//       edges {
//         node {
//           plikZdjecia {
//             path
//           }
//         }
//       }
//     }
//   }
// }
// `;

const DroneGalleryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    background: black;
`;

const DroneGalleryTitle = styled.div`
    /* background: rgba(0, 0, 0, 0.7); */
    background: red;
    padding: 10px 40px 20px 40px;
    max-width: 800px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    /* position: sticky; */
    top: 90px;
`;

const DroneGalleryDescription = styled.div`
    max-width: 800px;

    background: rgba(0, 0, 0, 0.7);
    padding: 10px 40px 20px 40px;
    max-width: 800px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    position: sticky;
    top: 90px;

    p {
        color: white;
        text-align: center;
        font-size: 1.5rem;
        margin-top: 0;
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
        <DroneGalleryTitle>
            <h2>Zdjęcia i Filmy z Drona</h2>
        </DroneGalleryTitle>
        <DroneGalleryDescription>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                qui officia deserunt mollit anim id est laborum.</p>
        </DroneGalleryDescription>
        <DroneGalleryGrid>
            <li>
                <div>
                    <img src="https://www.datocms-assets.com/38509/1607702733-screenshot-2020-12-07-at-11-53-16.png" alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="A first look at dunes"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="K2-138 6 Planets Artwork (Artist's Illustration) "/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Small Prominences"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Ezinu Crater"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Polar Ice"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Jupiter"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Star Gaia 17pbi Seen by Spitzer"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Another Cloudy Day"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="South Equatorial Belt Brown Barge Close-up"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Juno's Latest Flyby of Jupiter Captures Two Massive Storms"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="A first look at dunes"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="K2-138 6 Planets Artwork (Artist's Illustration) "/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Small Prominences"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Ezinu Crater"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Polar Ice"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Jupiter"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Star Gaia 17pbi Seen by Spitzer"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="Another Cloudy Day"/>
                </div>
            </li>
            <li>
                <div>
                    <img src="https://source.unsplash.com/random" alt="South Equatorial Belt Brown Barge Close-up"/>
                </div>
            </li>
        </DroneGalleryGrid>
    </DroneGalleryWrapper>
);

export default DroneGallery;