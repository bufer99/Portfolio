import styled from "styled-components";
import { motion } from "framer-motion";

import aboutIcon from "../../../media/menu/profile.svg"
import projectIcon from "../../../media/menu/projects.svg"
import hobbiesIcon from "../../../media/menu/guitar.svg"
import goalsIcon from "../../../media/menu/goal-list.svg"
import reactLogo from '../../../media/react.svg';
import jsLogo from '../../../media/js.svg';
import cssLogo from '../../../media/css3.svg';
import gitLogo from '../../../media/git.svg';
import htmlLogo from '../../../media/html5.svg';
import reduxLogo from '../../../media/redux.svg';

import { SideMenuItem as Item } from "./SideMenuItem";
import { useNavigate } from "react-router-dom";
import { LanguageToggler } from "../LanguageToggler";
import { useSelector } from 'react-redux'
import { getLanguage } from "../../../state/langSlice";

const skills = [reactLogo,
    jsLogo,
    cssLogo,
    gitLogo,
    htmlLogo,
    reduxLogo]

const getRandomLogo = () => {
    const i = Math.floor(Math.random() * (skills.length));
    console.log(i)
    return skills[i];
}

export const SideMenu = ({ animate, variants }) => {

    const { code, words } = useSelector(getLanguage);

    const navigate = useNavigate();
    console.log(animate)
    console.log(variants)

    return (
        <Wrapper
            animate={animate}
            variants={variants}
        >
            <Flex>
                <Item><LanguageToggler /></Item>
                <Item navigate={() => navigate("/aboutMe")} src={aboutIcon} text={words["aboutMe"]} />
                <Item navigate={() => navigate("/goals")} src={goalsIcon} text={words["goals"]} />
                <Item navigate={() => navigate("/skills")} src={getRandomLogo()} text={words["skills"]} />
                <Item navigate={() => navigate("/hobbies")} src={hobbiesIcon} text={words["hobbies"]} />
                <Item navigate={() => navigate("/references")} src={projectIcon} text={words["references"]} />
            </Flex>
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    background: white;
    position: absolute;
    top: 50px;
    width: 0%;
    overflow: hidden;
`

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
`
