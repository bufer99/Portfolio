import styled from 'styled-components'
import { useEffect, useState, useRef, useContext } from 'react'
import { motion, AnimatePresence, useCycle } from "framer-motion"
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AnimatedPage } from './AnimatedPage';
import { LangContext } from '../App';
import { BurgerNav } from './BurgerNav';

const menuItems = [{ 'Magamról': 'aboutMe' },
{ 'Hobbik': 'hobbies' },
{ 'Skills': 'skills' },
{ 'Célok': 'goals' },
{ 'Projektek': 'references' }];


export const Navigation = ({ setClick, clickOnMenu }) => {

    const navRef = useRef(null);
    const obj = useContext(LangContext)
    const navigate = useNavigate();
    const location = useLocation();

    const language = Object.entries(obj).map(([k, v]) => { return { [k]: v } });

    //ezt lehet ki kell szervezni
    const onResize = () => {
        setIsColumn(window.innerWidth <= 715)
    }



    const [itemtransition, setTransition] = useState(Array(menuItems.length).fill(0));
    const [isColumn, setIsColumn] = useState(window.innerWidth <= 715);
    const [isOpen, toggleOpen] = useCycle(false, true);

    const click = (param) => (e) => {

        setClick(true)
        const copy = [...itemtransition]
        const index = e.target.closest('div').id;
        setTransition(copy.map((e, i) => (Math.abs(index - i) + 1) / 10))
        setTimeout(() => navigate(`/${param}`), 800)
    }


    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [])

    const [selectedID, setSelectedID] = useState(null);

    return (
        <Home layout prop={clickOnMenu || location.pathname !== '/' ? '1fr' : 'minmax(100px, 1fr) 1fr'}>
            <NavWrapper layout
                row={clickOnMenu || isColumn || location.pathname !== '/' ? '1' : '1 / span 2'}
                align={clickOnMenu || isColumn || location.pathname !== '/' ? 'start' : undefined}
            >
                <BurgerContainer>
                    <BurgerNav isOpen={isOpen} toggle={() => toggleOpen()} />
                </BurgerContainer>
                <Nav ref={navRef}
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        closed: { left: "-100%", transition:{ duration: 0.3 }},
                        open: { left: "0", transition:{ duration: 0.3 }}
                    }}
                >
                    {language.map((e, i) => {
                        const key = Object.keys(e)[0];
                        const value = Object.values(e)[0];
                        return (
                            <Item
                                id={i}
                                key={key}
                                onClick={click(key)}
                            >
                                {value}
                            </Item>
                        )
                    })}
                </Nav>
            </NavWrapper>
            <AnimatedPage layout>
                <Outlet />
            </AnimatedPage>
        </Home>
    )
}

const BurgerContainer = styled.div`
    width: fit-content;
    display: none;
    @media screen and (max-width: 768px){
        display: flex;
    }
`

const Home = styled(motion.div)`
  height: 100%;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 2fr 6fr 2fr;
  align-items: center;
  justify-content: center;
`
const NavWrapper = styled(motion.div)`
    width: 100%;
    max-width: 1600px;
    justify-self: center;
    background: white;
    align-self: ${props => props.align} ;
    grid-row: ${props => props.row};
    grid-column: 1 / span 3;
`


const Nav = styled(motion.nav)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 100%;

    &:hover{
        opacity: 1;
    }

    gap: 8vh;
    

    @media screen and (max-width: 768px){
        position: absolute;
        left: -100%;
        flex-direction: column;
        background: white;
        height: 50%;
    }
`
const Item = styled(motion.div)`

    font-size: var(--fs-xl);
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
        background: var(--lines);
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
        background: var(--lines);
        right: 0;

        -o-transition:.5s;
        -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition: .5s;
    }
`