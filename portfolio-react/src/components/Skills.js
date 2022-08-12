import styled from "styled-components";
import { AnimatedPage } from "./AnimatedPage";
import { SkillBar } from "./SkillBar";
import reactLogo from '../media/react.svg';
import jsLogo from '../media/js.svg';
import dataBaseLogo from '../media/database.svg';
import cssLogo from '../media/css3.svg';
import gitLogo from '../media/git.svg';
import htmlLogo from '../media/html5.svg';
import reduxLogo from '../media/redux.svg';
import { Wrapper } from "./Wrapper";
import { useNavigate } from "react-router-dom";

export const Skills = () => {
    //https://venngage-wordpress.s3.amazonaws.com/uploads/2017/03/image15.png
    // ERRE ÁT KELL ÍRNI

    return (
        <Content>
            <SkillBar img={reduxLogo} value={6} max={10} />

            <SkillBar img={gitLogo} value={6} max={10} />

            <SkillBar img={jsLogo} value={8.5} max={10} />

            <SkillBar img={htmlLogo} value={7} max={10} />

            <SkillBar img={cssLogo} value={7} max={10} />

            <SkillBar img={dataBaseLogo} value={6} max={10} />

            <SkillBar img={reactLogo} value={8.5} max={10} />
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
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