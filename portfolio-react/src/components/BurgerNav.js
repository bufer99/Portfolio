import { motion } from "framer-motion"
import styled from "styled-components"


export const BurgerNav = ({ toggle, isOpen }) => {

    return (
        <Burger onClick={toggle} animate={isOpen ? "open" : "closed"}>
            <BurgerSpan
                variants={{
                    closed: { width: "40px", rotate: "0deg", transformOrigin: "bottom left", transition: { duration: 0.3 } },
                    open: { width: "40px", rotate: "40deg", transformOrigin: "top left", transition: { duration: 0.3 } }
                }}
            > </BurgerSpan>
            <BurgerSpan
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
            > </BurgerSpan>
            <BurgerSpan
                variants={{
                    closed: { width: "40px", rotate: "0deg", transformOrigin: "bottom left", transition: { duration: 0.3 } },
                    open: { width: "40px", rotate: "-40deg", transformOrigin: "bottom left", transition: { duration: 0.3 } }
                }}
            > </BurgerSpan>
        </Burger>
    )
}

//https://codesandbox.io/s/framer-motion-enter-animation-forked-yqxbpe?file=/src/App.tsx
/*
    a leszármazottak rálátnak az szülő animate értékére 1 MÉLYSÉGIG
*/

const BurgerSpan = styled(motion.span)`
    
    border-radius: 10px;
    width: 40px;
    height: 7px;
    background: black;

`

const Burger = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 10px;
    width: fit-content;
    cursor: pointer;
`