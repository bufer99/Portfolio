import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

export const Navtigation = () => {

    const [clickOnMenu, setClick] = useState(false)

    const click = () => {
        setClick(true)
    }

    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
    }

    const getRepos = async () => {
        await fetch("https://bufer99.github.io/taskList/", headers)
            .then(manageErrors)
            .catch(function (error) {
                console.log(error)
                console.log('Error Code   : ' + error.status);
                console.log('Error Reason : ' + error.statusText);
            });

    }


    function manageErrors(response) {
        console.log(response)
        if (!response.ok) {
            const responseError = {
                statusText: response.statusText,
                status: response.status
            };
            throw (responseError);
        }
        return response;
    }

    useEffect(() => {
        //console.log(getRepos().then((data) => console.log(data)));
        getRepos();
    }, [])

    return (
        <>
            <AnimatePresence>


                {!clickOnMenu &&
                    <Nav>
                        <Item animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 1000, opacity: 0 }}
                            exit={{ y: -1000, opacity: 0 }}
                            transition={{ delay: 0.1 }}
                            onClick={click}>
                            Magamról
                        </Item>
                        <Item animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 1000, opacity: 0 }}
                            exit={{ y: -1000, opacity: 0 }}
                            transition={{ delay: 0.2 }} onClick={click}>
                            Hobbik
                        </Item>
                        <Item animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 1000, opacity: 0 }}
                            exit={{ y: -1000, opacity: 0 }}
                            transition={{ delay: 0.3 }} onClick={click}>
                            Skills
                        </Item>
                        <Item animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 1000, opacity: 0 }}
                            exit={{ y: -1000, opacity: 0 }}
                            transition={{ delay: 0.4 }} onClick={click}>
                            Célok
                        </Item>
                        <Item animate={{ y: 0, opacity: 1 }}
                            initial={{ y: 1000, opacity: 0 }}
                            exit={{ y: -1000, opacity: 0 }}
                            transition={{ delay: 0.5 }} onClick={click}>
                            Projektek
                        </Item>
                    </Nav>
                }
            </AnimatePresence>



        </>
    )
}

const Nav = styled(motion.nav)`
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 8vh;
    

    @media screen and (max-width: 715px){
        flex-direction: column;
        gap: 8vh;
    }

    
    


`
const Item = styled(motion.div)`

    font-size: var(--fs-xxl);
    position: relative;
    transition: all 200ms ease-in-out;
    padding: 0 10px;

    &:hover{
        cursor: pointer;
        color: #8E3200;

        &:after{
            width: 100%;
        }

        &:before{
            width: 100%;
        }
    }

    &:after{
        content:'';
        position: absolute;
        height: 5px;
        width: 0%;
        background: #8E3200;
        left: 0;
        top: 100%;

        -o-transition:.5s;
        -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition:.5s;
    }

    &:before{
        content:'';
        position: absolute;
        height: 5px;
        width: 0%;
        background: #8E3200;
        right: 0;

        -o-transition:.5s;
        -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition:.5s;
    }
`