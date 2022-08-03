import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export const SkillBar = ({ value, max }) => {

    return (
        <Container max={`${max*10}%`}>
            <AnimatePresence>
                <Bar
                    animate={{ width: 'auto' }}
                    initial={{ width: '5%' }}
                    transition={{ duration: 2 }}

                    value={`${value*10}%`}
                >
                </Bar>
            </AnimatePresence>
        </Container>
    )
}


const Container = styled(motion.div)`
    overflow: hidden;
    width: ${(props) => props.max};
    height: 50px;
    border: 1px black solid;
    padding: 2px 2px 2px 0;
    border-radius: 0 110px 110px 0;
`

const Bar = styled(motion.div)`
    display: flex;
    gap:-10px;
    width: ${(props) => props.value};
    height: 100%;
    background: #8E3200;
    border-radius: 0 110px 110px 0;
`