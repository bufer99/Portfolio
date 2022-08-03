import styled from "styled-components";
import { AnimatedPage } from "./AnimatePage";
import { SkillBar } from "./SkillBar";

export const Skills = () => {
    return (
        <AnimatedPage>
            <Content>
                <SkillBar value={8} max={8} />
                <br />
                <SkillBar value={7} max={8} />
                <br/>
                <SkillBar value={6} max={8} />
                <br />
                <SkillBar value={5} max={8} />
                html_urlCSS
                JS E6
                React
                react redux
                sql
            </Content>
        </AnimatedPage>
    )
}


const Content = styled.div`  
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


/*
    wrappert megcsinálni mint az animatedPaget
    
*/