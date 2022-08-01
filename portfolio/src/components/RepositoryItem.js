import styled from "styled-components";
import { motion } from 'framer-motion';

export const RepositoryItem = ({ repo }) => {
    console.log(repo)

    const { html_url, name } = repo;

    return (
        <Wrapper
            whileHover={{ scale: 1.1, rotate: [null, -10, 10, 0] }}
        >
            <a href={html_url} target="_blank">
                <Content>
                    <Title>{name}</Title>
                </Content>
            </a>
        </Wrapper>
    )
}

const Title = styled.div`
    
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const Wrapper = styled(motion.div)`
    background: white;
    cursor: pointer;
    height: 100px;
    border: 1px gray solid;
    border-radius: 5px;

    & a{
        text-decoration: none;
        color: black;
        background: black;
    }
`

