import styled from 'styled-components'
import { useEffect, useState, useRef } from 'react'
import { motion, useCycle } from "framer-motion"
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AnimatedPage } from './AnimatedPage';
import { BurgerNav } from './BurgerNav';
import { SideMenu } from './Navigation/mobile/SideMenu';
import { Navigation } from './Navigation/Navigation';

const menuItems = [{ 'Magamról': 'aboutMe' },
{ 'Skills': 'skills' },
{ 'Célok': 'goals' },
{ 'Projektek': 'references' }];

const sideMenuVariants = {
    closed: { width: "0", transition: { duration: 0.2 } },
    open: { width: "100%", transition: { duration: 0.2 } }
}

export const Layout = () => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const [clickOnMenu, setClick] = useState(false);

    const isHome = location.pathname === '/';

    //ezt lehet ki kell szervezni
    const onResize = () => {
        setIsColumn(window.innerWidth <= 768)
    }



    const [itemtransition, setTransition] = useState(Array(menuItems.length).fill(0));
    const [isColumn, setIsColumn] = useState(window.innerWidth <= 768);
    const [isOpen, toggleOpen] = useCycle(false, true);

    const click = (param) => (e) => {

        setClick(true)
        const copy = [...itemtransition]
        const index = e.target.closest('div').id;
        setTransition(copy.map((e, i) => (Math.abs(index - i) + 1) / 10))
        setTimeout(() => navigate(`/${param}`), 300)
    }


    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [])

    return (
        <Home layout prop={clickOnMenu || !isHome ? '1fr' : 'minmax(100px, 1fr) 1fr'}>
            <NavWrapper
                id='NavWrapper'
                layout
                row={clickOnMenu || isColumn || !isHome ? '1' : '1 / span 2'}
                align={clickOnMenu || isColumn || !isHome ? 'start' : undefined}
                bg={clickOnMenu || isColumn || !isHome ? 'white' : undefined}
            >

                <BurgerContainer id='burgerContainer'>
                    <BurgerNav isOpen={isOpen} toggle={() => toggleOpen()} />
                </BurgerContainer>

                <SideMenu
                    animate={isOpen ? "open" : "closed"}
                    variants={sideMenuVariants}
                />

                <Navigation click={click} menuItems={menuItems} location={location} />

            </NavWrapper>
            <AnimatedPage>
                {/*isHome && isColumn && <Navigation mobile={true} click={click} menuItems={menuItems} location={location} />*/}
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
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 2fr minmax(0,1600px) 2fr;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  
  @media screen and (max-width: 768px){
        
  }
`
const NavWrapper = styled(motion.div)`
    width: 100%;
    max-width: 1600px;
    justify-self: center;
    align-self: ${props => props.align} ;
    grid-row: ${props => props.row};
    grid-column: 1 / span 3;

    background: ${props => props.bg} ;
    transition: background 500ms;
    padding-bottom: 5px;

    @media screen and (max-width: 768px){
        position: absolute;
        background: ${props => props.bg};
    }
`


