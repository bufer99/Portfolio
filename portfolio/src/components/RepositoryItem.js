import styled from "styled-components";
import gitLogo from '../media/github.svg';
import reactLogo from '../media/react.svg';
import jsLogo from '../media/js.svg';
import linkLogo from '../media/external.svg';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import formShot from '../media/screenshots/formComponent-react.PNG';
import ratingShot from '../media/screenshots/interactive-rating-component-react.PNG';
import setShot from '../media/screenshots/set-game.PNG';
import tictacShot from '../media/screenshots/tictactoe.PNG';
import taskListShot from '../media/screenshots/taskList-react.PNG';
import portfolioShot from '../media/screenshots/portfolio.PNG';


export const RepositoryItem = ({ repo, activeId, setActiveId }) => {

    const { html_url, name, language, id } = repo;

    const screenshots = [formShot, ratingShot, setShot, tictacShot, taskListShot, portfolioShot];
    console.log(screenshots)

    const getReadMe = async () => {
        await fetch(`https://api.github.com/repos/bufer99/${name}/readme`)
            .then(response => response.json())
            .then(data => atob(data.content))
    }

    //getReadMe();

    return (
        <Wrapper
            onClick={(e) => setActiveId(activeId === id ? null : id)}
        >
            <AnimatePresence exitBeforeEnter>

                {!activeId || activeId !== id ?
                    <Content
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0, }}
                        exit={{ opacity: 0, }}
                        key='cover'
                    >
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
                    :

                    <Content
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0, }}
                        exit={{ opacity: 0 }}
                        key='description'
                    >
                        <ScreenShot src={screenshots.find(e => e.includes(name))} />
                    </Content>
                }

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
    height: 100%;
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
    justify-content: center;
    height: 100%;
               
                `

const Wrapper = styled(motion.div)`
            background: white;
            cursor: pointer;
            height: 400px;
            max-width: 500px;
            border: 1px black solid;
            overflow: hidden;
            justify-self: center;
            width: fill-available;
                `

