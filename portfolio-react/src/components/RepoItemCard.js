import styled from "styled-components"
import { motion } from "framer-motion";
import screenshots from "./ScreenShots";
import React from "react";

export const RepoItemCard = ({ props, setActiveId }) => {
    const {id, name, html_url} = props;
    return (
        <React.Fragment>
            <Overlay
                onClick={() => setActiveId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: "auto" }}
            >

            </Overlay>
            <Card layoutId={id}>
                <ScreenShot src={screenshots.find(e => e.includes(name.replace('-react', '')))} >
                </ScreenShot>
                <LogoFlex>
                    <Logo href={`https://bufer99.github.io/${name}/`} target="_blank">LIVE</Logo>
                    <Logo href={html_url} target="_blank">GITHUB CODE</Logo>
                </LogoFlex>
            </Card>
        </React.Fragment>
    )
}


const LogoFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-xxl);
    gap: 10%;
    height: 100%;
`

const Logo = styled(motion.a)`
    text-decoration: none;
    color: black;
`


const ScreenShot = styled(motion.img)`
    width: 100%;
    @media screen and (max-width: 768px){
        
    }
`

const Card = styled(motion.div)`
    top: 2%;
    bottom: 2%;
    left: 20%;
    right: 20%;
    position: fixed;
    z-index: 110;
    background: #91BDE5;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px){
        top: 20%;
        bottom: 20%;
        left: 5%;
        right: 5%;
    }

    @media screen and (max-width: 425px){
        top: 35%;
        bottom: 35%;
        left: 5%;
        right: 5%;
    }
`

const Overlay = styled(motion.div)`
    
    cursor: pointer;
    z-index: 100;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);

`