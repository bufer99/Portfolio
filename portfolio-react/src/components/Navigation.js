import styled from 'styled-components'
import { useEffect, useState, useRef } from 'react'
import { motion, useCycle } from "framer-motion"
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AnimatedPage } from './AnimatedPage';
import { BurgerNav } from './BurgerNav';
import { SideMenu } from './Navigation/mobile/SideMenu';

const menuItems = [{ 'Magamról': 'aboutMe' },
{ 'Skills': 'skills' },
{ 'Célok': 'goals' },
{ 'Projektek': 'references' }];


export const Navigation = () => {

    const navRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const [clickOnMenu, setClick] = useState(false);

    const isHome = location.pathname !== '/';

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
        <Home layout prop={clickOnMenu || isHome ? '1fr' : 'minmax(100px, 1fr) 1fr'}>
            <NavWrapper layout
                row={clickOnMenu || isColumn || isHome ? '1' : '1 / span 2'}
                align={clickOnMenu || isColumn || isHome ? 'start' : undefined}
                bg={clickOnMenu || isColumn || isHome ? 'white' : undefined}
            >
                <BurgerContainer>
                    <BurgerNav isOpen={isOpen} toggle={() => toggleOpen()} />
                </BurgerContainer>
                {isColumn ? <SideMenu
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        closed: { width: "0", transition: { duration: 0.2 } },
                        open: { width: "100%", transition: { duration: 0.2 } }
                    }}
                /> :

                    <Nav ref={navRef}

                        variants={{
                            closed: { left: "-100%", transition: { duration: 0.3 } },
                            open: { left: "0", transition: { duration: 0.3 } }
                        }}
                    >
                        {menuItems.map((e, i) => {
                            const key = Object.keys(e)[0];
                            const value = Object.values(e)[0];
                            return (
                                <Item
                                    active-item={location.pathname.slice(1) === value ? "true" : "false"}
                                    id={i}
                                    key={key}
                                    onClick={click(value)}
                                >
                                    {key}
                                </Item>
                            )
                        })}
                    </Nav>
                }
            </NavWrapper>
            <AnimatedPage>
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
        background: white;
    }
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
        display: none;
    }
    
`
const Item = styled(motion.div)`

    font-size: var(--fs-xl);
    position: relative;
    transition: all 200ms ease-in-out;
    padding: 0 10px;

    &[active-item="true"]{
        &:after{
            content:'';
            position: absolute;
            height: var(--lh);
            width: 100%;
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
            width: 100%;
            background: var(--lines);
            right: 0;
    
            -o-transition:.5s;
            -ms-transition:.5s;
            -moz-transition:.5s;
            -webkit-transition:.5s;
            transition: .5s;
        }
    }

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
