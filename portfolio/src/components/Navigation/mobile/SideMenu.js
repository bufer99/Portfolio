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

import { SideMenuItem } from "./SideMenuItem";
import { useNavigate } from "react-router-dom";

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

export const SideMenu = ({animate, variants}) => {

    const navigate = useNavigate();
    console.log(animate)
    console.log(variants)

    return (
        <Wrapper
            animate={animate}
            variants={variants}
        >
            <Flex>
                <SideMenuItem navigate={() => navigate("/aboutMe")} src={aboutIcon} text={"Magamról"} />
                <SideMenuItem navigate={() => navigate("/goals")} src={goalsIcon} text={"Célok"} />
                <SideMenuItem navigate={() => navigate("/skills")} src={getRandomLogo()} text={"Skills"} />
                <SideMenuItem navigate={() => navigate("/hobbies")} src={hobbiesIcon} text={"Hobbik"} />
                <SideMenuItem navigate={() => navigate("/references")} src={projectIcon} text={"Projektek"} />
            </Flex>
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    height: 100%;
    position: fixed;
    top: 50px;
    width: 100%;
`

const Flex = styled.div`

    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
`
