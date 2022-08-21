import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Tree = () => {
    return (

        <SVG
            initial={false}
            animate={{}}
            whileHover=""
            whileTap=""
            onClick={() => { }}
        >
            <motion.line
                x1="0"
                y1="0"
                x2="100"
                y2="0"
                stroke="black"
                strokeWidth={50}
            />

            <motion.line
                x1="120"
                y1="0"
                x2="200"
                y2="0"
                stroke="black"
                strokeWidth={50}
            />

            <motion.path d="M 200 0 A 25 25 0 0 1 50 0" stroke="red" fill="transparent" strokeWidth={25}/>
                                {/**A rx ry x-axis-rotation large-arc-flag sweep-flag x y*/}
        </SVG>
    )
}
const SVG = styled(motion.svg)`
    height: 100%;  
    width: 100%;

`