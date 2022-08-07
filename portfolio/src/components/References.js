import { useEffect } from "react";
import styled from "styled-components";
import { AnimatedPage } from './AnimatedPage';
import { useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import { Wrapper } from "./Wrapper";

export const References = () => {

    const [repos, setRepos] = useState(null)
    const [activeId, setActiveId] = useState(null);

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
                <Content>
                    <Grid>
                        {repos.map((repo) => {
                            return (
                                <RepositoryItem
                                    key={repo.id}
                                    activeId={activeId}
                                    setActiveId={setActiveId}
                                    repo={repo}
                                />
                            )
                        })}
                    </Grid>
                </Content>
    )
}

const Content = styled.div`
    width: 100%;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(400px, 1fr));
    gap: 10px;
`