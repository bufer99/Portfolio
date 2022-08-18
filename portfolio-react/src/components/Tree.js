import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Tree = () => {
    return (

        <SVG
            initial={false}
            animate={{}}
            whileHover=""
            whileTap=""
            width="440"
            height="440"
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
        </SVG>
    )
}
const SVG = styled(motion.svg)`
    
  
`