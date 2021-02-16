import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const TriptychWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100vh;
`;

const TriptychLeft = styled.div`
    position: relative;
    width: 30%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    div {
        position: absolute;
        background: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%),
            url("https://images.unsplash.com/photo-1602699905588-a6c9f58bad2b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80");
        background-size: cover;
        background-position: 50% 75%;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
        
        :hover {
            opacity: 0.8;
        }
    }

    h2 {
        z-index: 1;
    }
    `;
    
    const TriptychCenter = styled.div`
    position: relative;
    width: 40%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    div {
        position: absolute;
        background: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%),
            url("https://images.unsplash.com/photo-1467987506553-8f3916508521?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
        background-size: cover;
        background-position: 40% 75%;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
        
        :hover {
            opacity: 0.8;
        }
    }
    
    h2 {
        z-index: 1;
    }
    `;
    
    const TriptychRight = styled.div`
    position: relative;
    width: 30%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    div {
        position: absolute;
        background: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%),
            url("https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2134&q=80");
        background-size: cover;
        background-position: 40% 75%;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
        
        :hover {
            opacity: 0.8;
        }
    }

    h2 {
        z-index: 1;
    }  
    `;
    
    const Triptych = () => (
    <TriptychWrapper>
        <TriptychLeft>
            <div></div>
            <h2>Zdjęcia i Filmy<br/>z Drona</h2>
        </TriptychLeft>
        <TriptychCenter>
            <div></div>
            <h2>Fotografia<br/>Architektury i Wnętrz</h2>
        </TriptychCenter>
        <TriptychRight>
            <div></div>
            <h2>Wirtualne<br/>Spacery 3D</h2>
        </TriptychRight>
    </TriptychWrapper>
);

export default Triptych;