import { useState } from "react";
import styled from "styled-components";
import education from "../media/elte2.jpg";
import city from "../media/city.jpg";
import referee from "../media/referee.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getLanguage } from "../state/langSlice";

const pics = {
    'city': city,
    'referee': referee,
    'education': education
}

const Slider = ({ activeImg }) => {

    return (
        <AnimatePresence mode={"wait"}>
            <motion.div>
                <Img
                    style={{ width: '100%', height: '100%' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={activeImg}
                    src={activeImg}>
                </Img>
            </motion.div>
        </AnimatePresence>
    )
}


const Img = styled(motion.img)`
`



export const About = () => {

    const handleClick = (e) => {
        console.log(e.target)
        if ((e.target.getAttribute('class') === "img_ref")) setImg(pics[e.target.id])
    }

    const { words } = useSelector(getLanguage);
    const [activeImg, setImg] = useState(education);

    return (
        <Flex>
            <Left>
                <Slider activeImg={activeImg} />
            </Left>
            <Right>
                <div>
                    <div>{words.about['intro-first']}</div>
                    <div>{words.about['intro-second']} <span style={{ color: "#1F6F8B" }}>{words.about['intro-third']}</span></div>
                </div>
                <p id="content" onClick={handleClick} dangerouslySetInnerHTML={{ __html: words.about['text'] }}>
                </p>
            </Right>
        </Flex>
    )
}

const Flex = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 850px){
        flex-direction: column-reverse;
        justify-content: start;
    }
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 10px;

    @media screen and (max-width: 425px){
        width: 100%;
    }

    & > div:first-child > div{
        font-size: var(--fs-xxxl);
        color: white;
    }

    & #content {
        font-size: var(--fs-l);
        text-align: justify;
    }

    & #content span{
        text-decoration: underline;
        cursor: pointer;
    }
    
    & #content abbr {
        text-decoration: none;
        font-style: italic;
    }
`

const Left = styled.div`
    padding: 5% 2%;
    font-size: 30px;
    width: 30%;
    min-width: 360px;

    @media screen and (max-width: 850px){
        height: 300px;
    }

    @media screen and (max-width: 370px){
        min-width: 300px;
    }
`