import styled from "styled-components";
import Modal from '@mui/material/Modal';
import gitLogo from '../media/github.svg';
import reactLogo from '../media/react.svg';
import jsLogo from '../media/js.svg';
import linkLogo from '../media/external.svg';
import { useState } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import ScreenShots from "./ScreenShots";


export const RepositoryItem = ({ repo, activeId, setActiveId }) => {

    const { html_url, name, language, id } = repo;


    //console.log(screenshots)

    const getReadMe = async () => {
        await fetch(`https://api.github.com/repos/bufer99/${name}/readme`)
            .then(response => response.json())
            .then(data => atob(data.content))
    }

    return (
        <Wrapper
            /*onClick={(e) => setActiveId(activeId === id ? null : id)}*/
            onClick={() => setActiveId(id)}
            layoutId={id}
        >
            <AnimatePresence exitBeforeEnter>
                <Content
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0, }}
                    exit={{ opacity: 0 }}
                    key='description'
                >
                    <ScreenShot id="screen" src={ScreenShots.find(e => e.includes(name.replace('-react', '')))} />
                    <Title>{name.replace('-react', '')}</Title>
                </Content>

            </AnimatePresence>

        </Wrapper>


    )
}

/**
 * useful:
 * https://stackoverflow.com/questions/68199465/animatepresence-show-both-elements-when-animating
 */

const LogoFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${(props => props.flex || "start")};
    height: 50%;
`

const ScreenShot = styled.img`
    height: 80%;
`

const Logo = styled(motion.img)`
        height: 25%;
        `

const Title = styled.div`
                font-family: Coolvetica, Arial, serif;
                font-weight: black;
                font-size: var(--fs-l);
                text-align: center;
                height: 20%;
                display: flex;
                align-items: center;
                `

const Content = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100%;
               
                `

const Wrapper = styled(motion.div)`
        cursor: pointer;
        height: 400px;
        overflow: hidden;
        justify-self: center;
        width: fill-available;
        border-radius: 25px;
        background: #98BAE7;

        &:hover{
            background: #FFF8D5;
        }
`

