import styled from "styled-components";
import Modal from '@mui/material/Modal';
import gitLogo from '../media/github.svg';
import reactLogo from '../media/react.svg';
import jsLogo from '../media/js.svg';
import linkLogo from '../media/external.svg';
import { useState } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import formShot from '../media/screenshots/formComponent.PNG';
import ratingShot from '../media/screenshots/interactive-rating-component.PNG';
import setShot from '../media/screenshots/set-game.PNG';
import tictacShot from '../media/screenshots/tictactoe.PNG';
import taskListShot from '../media/screenshots/taskList.PNG';


export const RepositoryItem = ({ repo, activeId, setActiveId }) => {

    const { html_url, name, language, id } = repo;

    const screenshots = [formShot, ratingShot, setShot, tictacShot, taskListShot];
    //console.log(screenshots)

    const getReadMe = async () => {
        await fetch(`https://api.github.com/repos/bufer99/${name}/readme`)
            .then(response => response.json())
            .then(data => atob(data.content))
    }

    //getReadMe();

    const [active, toggleActive] = useCycle(false, true);

    return (
        <Wrapper
            /*onClick={(e) => setActiveId(activeId === id ? null : id)}*/
            data-active={active}
            onClick={() => toggleActive()}
        >
            <AnimatePresence exitBeforeEnter>
                <Content
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0, }}
                    exit={{ opacity: 0 }}
                    key='description'
                >
                    <ScreenShot id="screen" src={screenshots.find(e => e.includes(name.replace('-react', '')))} />
                    <Title>

                        {name.replace('-react', '')}

                    </Title>
                    <LogoFlex>
                        {name.includes('react') &&
                            <Logo src={reactLogo}></Logo>
                        }
                        <Logo src={jsLogo}></Logo>
                        <Logo
                            whileHover={{ scale: 1.1 }}
                            src={linkLogo}
                            onClick={() => window.open(html_url)}
                        >
                        </Logo>
                    </LogoFlex>
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
    width: 100%;
`

const Logo = styled(motion.img)`
        height: 25%;
        `

const Title = styled.div`
                font-family: Coolvetica, Arial, serif;
                font-weight: black;
                font-size: var(--fs-l);
                text-align: center;
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
            max-width: 500px;
            overflow: hidden;
            justify-self: center;
            width: fill-available;

            &[data-active="true"]{
                /*
                grid-column: 1 / -1;
                grid-column: 1 / -1;
                */ 
               &[id="screen"]{
                  position: absolute;
                    top: 0;
                }
               
           }
`

