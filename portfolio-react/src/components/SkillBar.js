import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export const SkillBar = ({ value, max, img }) => {

    return (
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
    )
}
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