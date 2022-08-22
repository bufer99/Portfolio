import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getLanguage } from "../../state/langSlice";

export const Navigation = ({menuItems, click, location, display}) => {

    const { code, words } = useSelector(getLanguage);

    return (
        <Nav
            layout
            display = { display ? undefined : "none"}
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
                        {words[value]}
                    </Item>
                )
            })}
        </Nav>
    )
}


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
        flex-direction: column;
        display: ${props => props.display};
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
