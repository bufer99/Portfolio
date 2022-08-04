import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

export const Wrapper = ({ children }) => {

    const navigate = useNavigate();

    return (
        <Content>
            <HomeIconContainer>
                <motion.div
                    whileHover={{ scale: 1.1, rotate: [null, -10, 10, 0], cursor: 'pointer' }}
                    onClick={() => navigate("/")}
                >
                    <HomeIcon sx={{ fontSize: 80 }} />
                </motion.div>
            </HomeIconContainer>
            <Flex>
                {children}
            </Flex>
        </Content>
    )
}

const Flex = styled.div`
    height: 100%;
    justify-content: center;
    display: flex;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

`
const HomeIconContainer = styled.div`
    display: flex;
    align-items: center;
    jusify-content: center;
`