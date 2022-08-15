import { motion } from 'framer-motion';
import styled from 'styled-components'; 

const animations = {
    animate: { opacity: 1, transition: { delay: 0}},
    initial: { opacity: 0 },
    exit: { opacity: 0, transition: { delay: 0} }
}   

const navHeight = document.querySelector('nav')

console.log(navHeight)

export const AnimatedPage = ({children}) => {
    return (
        <Wrapper
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </Wrapper>
    )
}


const Wrapper = styled(motion.div)`
    @media screen and (max-width: 768px){
        margin-top: 60px;
    }
    grid-row: 2;
    grid-column: 2;
    overflow: visible;
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 0 5%;
    padding-bottom: 30px;
    max-width: 1600px;
`