import styled from 'styled-components'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Link } from 'react-router-dom';
import { AnimatedPage } from './AnimatePage';

const menuItems = [{ 'Magamról': 'aboutMe' },
                    { 'Hobbik': 'hobbies' },
                    { 'Skills': 'skills' },
                    { 'Célok': 'goals' },
                    { 'Projektek': 'references' }];


export const Navigation = () => {

    const navRef = useRef(null);

    //ezt lehet ki kell szervezni
    const onResize = () => {
        setIsColumn(window.innerWidth <= 715)
    }


    const [clickOnMenu, setClick] = useState(false);
    const [itemtransition, setTransition] = useState(Array(menuItems.length).fill(0));
    const [isColumn, setIsColumn] = useState(window.innerWidth <= 715);


    const click = (e) => {
        const copy = [...itemtransition]
        const index = e.target.closest('div').id;
        setTransition(copy.map((e, i) => (Math.abs(index - i) + 1) / 10))
        setTimeout(() => setClick(true), 50);
    }

    useEffect(() => {
        //console.log(itemtransition)
    },[itemtransition])
    
    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [])


    return (
        <Home
            animate={{ y: 0}}
            initial={{ y: 1000}}
            exit={{ y: -1000,  transition: { delay: 1.1 }}}
        >
            <AnimatePresence exitBeforeEnter>
                {!clickOnMenu &&
                    <Nav ref={navRef}>
                        {menuItems.map((e, i) => {
                            const text = Object.keys(e)[0];
                            const value = Object.values(e)[0];
                            return (
                                <Item
                                    id={i}
                                    key={value}
                                    animate={{ x: 0, y: 0, opacity: 1, transition: { delay: (i + 1) / 10 } }}
                                    initial={{ x: isColumn ? 1000 : 0, y: isColumn ? 0 : 1000, opacity: 0, }}
                                    exit={{ x: isColumn ? -1000 : 0, y: isColumn ? 0 : -1000, opacity: 0, transition: { delay: itemtransition[i] } }}
                                    onClick={click}>

                                    {<Link to={`/${value}`}>{text}</Link>}
                                
                                </Item>
                            )
                        })}
                    </Nav>
                }
            </AnimatePresence>
        </Home>
    )
}

const Home = styled(motion.div)`
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

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

    & a{
        text-decoration: none;
        color: black;
    }

    &:hover{
        cursor: pointer;
        
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
        height: var(--lh);
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
        height: var(--lh);
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