import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';


export const SkillPuck = ({ value, img }) => {

    const [percentage, setPercentage] = useState(0);



    const { ref, inView, entry } = useInView({
        threshold: 0.6,
        triggerOnce: true,
        onChange: (inView, entry) => {

            if (!inView) return;
            const myInterval = setInterval(() => {
                setPercentage((percentage) => {

                    if (percentage >= value * 10) {
                        clearInterval(myInterval)
                        return percentage
                    }
                    return percentage + 1
                })
            }
                , 10);
        }
    });

    const variants = {
        offscreen: {
            strokeDashoffset: 440,
            opacity: 0,
        },
        onscreen: {
            strokeDashoffset: [440, 440 * (1 - value * 0.1)],
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };


    return (
        <Skill
            ref={ref}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={variants}
        >
            <Outer>
                <Inner>
                    <Content>
                        <img src={img}></img>
                        <span>{percentage} %</span>
                    </Content>
                </Inner>
            </Outer>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <Circle cx="80" cy="80" r="70" />
            </svg>
        </Skill>
    )
}

const Content = styled(motion.div)`
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-family: Coolvetica, Arial, serif;
    font-weight: black;
    font-size: var(--fs-l);

    & img{
        height: 50%;
    }
`
const Skill = styled(motion.div)`
    width: 160px;
    height: 160px;
    position: relative;

    & > svg{
        position: absolute;
        top: 0;
    }
`
const Outer = styled(motion.div)`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    

    display: flex;
    justify-content: center;
    align-items: center;

    background: white;
`
const Inner = styled(motion.div)`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    

    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--theme);
`
const Circle = styled(motion.circle)`
    fill: none;
    stroke: var(--lines);
    stroke-width: 20px;
    stroke-dasharray: 440;
    
    box-shadow: 0 0 10px red;
`


/*
<Container max={`${max*10}%`}>
            <AnimatePresence>
                <Bar
                    animate={{ width: `${(value/max)*100}%`}}
                    initial={{ width: '5%' }}
                    transition={{ duration: 2 }}

                    value={(value/max)*10}
                >
                    <Logo src={img}></Logo>
                </Bar>
            </AnimatePresence>
        </Container>
*/
const Logo = styled.img`
    height: 80%;
    left: 0;
    align-self: center;
    
`

const Container = styled(motion.div)`
    overflow: hidden;
    width: ${(props) => props.max};
    min-height: 30px;
    height: var(--fs-xxl);
    border: 2px var(--lines) solid;
    padding: 0px 0px 0px 0;
    border-radius: 0 110px 110px 0;
`

const Bar = styled(motion.div)`
    display: flex;
    justify-content: center;
    gap: 5px;
    gap:-10px;
    height: 100%;
    background: var(--lines);
    border-radius: 0 110px 110px 0;


    &:after{
        color: white;
        font-size: var(--fs-xl);
        content: '${(props) => props.value}';
        opacity: 0;
        align-self: center;
    }

    &:hover{
        &:after{
            opacity: 1;
        }
    }


`