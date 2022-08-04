import styled from "styled-components";
import { AnimatedPage } from "./AnimatePage";
import { SkillBar } from "./SkillBar";
import reactLogo from '../media/react.svg';
import jsLogo from '../media/js.svg';
import dataBaseLogo from '../media/database.svg';
import cssLogo from '../media/css3.svg';
import gitLogo from '../media/git.svg';
import htmlLogo from '../media/html5.svg';
import reduxLogo from '../media/redux.svg';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Skills = () => {

    const navigate = useNavigate();

    return (
        <AnimatedPage>
            <HomeIconContainer>
                <motion.div
                    whileHover={{ scale: 1.1, rotate: [null, -10, 10, 0], cursor: 'pointer' }}
                    onClick={() => navigate("/")}
                >
                    <HomeIcon sx={{ fontSize: 80 }} />
                </motion.div>
            </HomeIconContainer>
            <Content>
                <SkillBar img={reduxLogo} value={6} max={10} />

                <SkillBar img={gitLogo} value={6} max={10} />

                <SkillBar img={jsLogo} value={8.5} max={10} />

                <SkillBar img={htmlLogo} value={7} max={10} />

                <SkillBar img={cssLogo} value={7} max={10} />

                <SkillBar img={dataBaseLogo} value={6} max={10} />

                <SkillBar img={reactLogo} value={8.5} max={10} />
            </Content>
        </AnimatedPage>
    )
}

const HomeIconContainer = styled.div`
    display: flex;
`

const Content = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`


/*
    wrappert megcsinálni mint az animatedPaget
    homeIconost kiszervezni mint animatedPaget
    leírást adni a logokhoz
*/