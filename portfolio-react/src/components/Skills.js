import styled from "styled-components";
import { useRef } from "react";
import reactLogo from '../media/react.svg';
import jsLogo from '../media/js.svg';
import dataBaseLogo from '../media/database.svg';
import cssLogo from '../media/css3.svg';
import gitLogo from '../media/git.svg';
import htmlLogo from '../media/html5.svg';
import { SkillPuck } from "./SkillPuck";

const stack = [
    [jsLogo, 8.5],
    [dataBaseLogo, 6],
    [cssLogo, 7],
    [gitLogo, 7],
    [htmlLogo, 7],
    [reactLogo, 8.5],
]


export const Skills = () => {
    //https://venngage-wordpress.s3.amazonaws.com/uploads/2017/03/image15.png
    // ERRE ÁT KELL ÍRNI

    const scrollRef = useRef(null)

    return (
        <Content ref={scrollRef}>
            {stack.map( ([logo, value],i) => (
                <SkillPuck key={logo+'-'+i} value={value} img={logo} />
            ))}
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
`


/*
    wrappert megcsinálni mint az animatedPaget
    homeIconost kiszervezni mint animatedPaget
    leírást adni a logokhoz
*/