import styled from "styled-components"
import { motion, AnimatePresence, useCycle } from "framer-motion";
import screenshots from "./ScreenShots";
import React from "react";

export const RepoItemCard = ({ props, setActiveId }) => {
    const {id, name} = props;
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
            </Card>
        </React.Fragment>
    )
}
const ScreenShot = styled(motion.img)`
    width: 100%;

`

const Card = styled(motion.div)`
    top: 0;
    bottom: 0;
    left: 20%;
    right: 20%;
    position: fixed;
    z-index: 110;
    background: #91BDE5;
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