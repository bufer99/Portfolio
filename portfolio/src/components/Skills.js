import styled from "styled-components";
import { AnimatedPage } from "./AnimatePage";
import { SkillBar } from "./SkillBar";

export const Skills = () => {
    return (
        <AnimatedPage>
            <Content>
                <SkillBar value={10} max={10} />
                <br />
                <SkillBar value={3} max={8} />
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