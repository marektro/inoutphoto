import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavigationWrapper = styled.nav`
    background: black;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 1;
    padding: 15px 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Barlow;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Logo = styled.span`
    font-weight: 400;
    font-size: 30px;
    color: white;
    line-height: 30px;
`;
    
const NavigationList = styled.ul`
    list-style: none;
    display: flex;
`;
    
const NavigationListItem = styled.li`
    // text-transform: uppercase;
    font-weight: 200;
    font-size: 20px;
    margin-left: 40px;
    color: white;
`;

const Navigation = () => (
    <NavigationWrapper>
        <Logo><Link to="#"><span>IN OUT<br/>PHOTO</span></Link></Logo>
        <NavigationList>
            <NavigationListItem><Link to="#">zdjęcia i filmy z drona</Link></NavigationListItem>
            <NavigationListItem><Link to="#">fotografia wnętrz</Link></NavigationListItem>
            <NavigationListItem><Link to="#">wirtualne spacery</Link></NavigationListItem>
            <NavigationListItem><Link to="#">o mnie</Link></NavigationListItem>
            <NavigationListItem><Link to="#">kontakt</Link></NavigationListItem>
            <NavigationListItem><Link to="#">partnerzy</Link></NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
);

export default Navigation;