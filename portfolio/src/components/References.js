import { useEffect } from "react";
import styled from "styled-components";
import { AnimatedPage } from './AnimatePage';
import { useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

export const References = () => {

    const navigate = useNavigate();
    const [repos, setRepos] = useState(null)

    const getRepos = async () => {
        await fetch("https://api.github.com/users/bufer99/repos")
            .then(response => response.json())
            .then(data => setRepos(data))
    }


    useEffect(() => {
        //console.log(getRepos().then((data) => console.log(data)));
        getRepos();
    }, [])

    useEffect(() => {
        console.log(repos)
    }, [repos])

    if (repos === null) {
        return
    }

    return (
        <AnimatedPage>
            <Wrapper>
                <HomeIconContainer
                    whileHover={{ scale: 1.1, rotate: [null, -10, 10, 0] }}
                    onClick={() => navigate("/")}
                >
                    <HomeIcon sx={{ fontSize: 80 }} />
                </HomeIconContainer>
                <Content>
                    <GridContainer>
                        <Grid>
                            {repos.map((repo) => {
                                return (
                                    <RepositoryItem
                                        
                                        repo={repo}
                                    />
                                )
                            })}
                        </Grid>
                    </GridContainer>
                </Content>
            </Wrapper>
        </AnimatedPage>
    )
}

const GridContainer = styled.div`
    max-width: 1200px;
    min-width: 100px;
    width: 100%;

`

const Content = styled.div`
    height: 100%;   
    display: flex;
    align-items: center;
    justify-content: center;
`

const HomeIconContainer = styled(motion.div)`
    position: absolute;
    cursor: pointer;
    left: 10px;
    top: 10px;
`


const Wrapper = styled.div`
    height: 100%;
    overflow: hidden;
`

const Grid = styled.div`
    grid-column: 1;
    grid-row: 1;
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: 1fr;
    gap: 5px;
`