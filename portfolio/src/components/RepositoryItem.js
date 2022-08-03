import styled from "styled-components";
import gitLogo from '../media/github.svg';
import reactLogo from '../media/react.svg';
import jsLogo from '../media/js.svg';
import linkLogo from '../media/external.svg';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const RepositoryItem = ({ repo, activeId, setActiveId }) => {

    const { html_url, name, language, id } = repo;
    console.log(activeId, id, activeId === id)


    const getReadMe = async () => {
        await fetch(`https://api.github.com/repos/bufer99/${name}/readme`)
            .then(response => response.json())
            .then(data => console.log(atob(data.content)))
    }

    //getReadMe();

    return (
        <Wrapper
            onClick={(e) => setActiveId(activeId === id ? null : id)}
        >
            <AnimatePresence exitBeforeEnter>

                {!activeId || activeId !== id ?
                    <Content
                        animate={{ /*x: 0,*/ opacity: 1 }}
                        initial={{ /*x: 500,*/ opacity: 0, }}
                        exit={{ /*x: -500,*/ opacity: 0, }}
                        key='cover'
                    >
                        <Logo src={gitLogo}></Logo>
                        <Title>

                            {name.replace('-react', '')}

                        </Title>
                    </Content>
                    :

                    <Content
                        flex='space-evenly'
                        animate={{ /*x: 0,*/ opacity: 1 }}
                        initial={{ /*x: 500,*/ opacity: 0, }}
                        exit={{ /*x: -500,*/ opacity: 0 }}
                        key='description'
                    >

                        {name.includes('react') && <Logo size="50%" src={reactLogo}></Logo>}
                        <Logo size="50%" src={jsLogo}></Logo>
                        <Logo
                            whileHover={{ scale: 1.1 }}
                            size="50%" src={linkLogo}
                            onClick={() => window.open(html_url)}
                        >
                        </Logo>


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

const Logo = styled(motion.img)`
                height: ${props => props.size || "100%"};
                `

const Title = styled.div`
                font-family: Coolvetica, Arial, serif;
                font-weight: black;
                font-size: var(--fs-l);
                `

const Content = styled(motion.div)`
                display: flex;
                align-items: center;
                justify-content: ${(props => props.flex || "start")};
                height: 100%;
                `

const Wrapper = styled(motion.div)`
                background: white;
                cursor: pointer;
                height: var(--ge-xl);
                border: 2px gray solid;
                border-radius: 50px;
                overflow: hidden;
                `

