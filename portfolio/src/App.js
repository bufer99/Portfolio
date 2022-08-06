import { useEffect, useRef, useState, createContext } from 'react';
import './App.css';
import styled from 'styled-components'
import { Navigation } from './components/Navigation';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { References } from './components/References';
import { Skills } from './components/Skills';
import { motion, AnimatePresence } from "framer-motion"
import hu from './media/flags/hungary.svg'
import en from './media/flags/england.svg'

const languages = {
  hu: {
    'aboutMe': 'Magamról',
    'hobbies': 'Hobbik',
    'skills': 'Programnyelvek',
    'goals': 'Amit kéne',
    'references': 'Projektek',
  },

  en: {
    'aboutMe': 'About me',
    'hobbies': 'Hobbies',
    'skills': 'Skills',
    'goals': 'Goals',
    'references': 'My projects',
  }
}


export const LangContext = createContext(languages.hu);

export default function App() {
  const location = useLocation();

  const [lang, setLang] = useState(languages.hu)
  const [clickOnMenu, setClick] = useState(false);

  const click = e => {
    setLang(languages[e.target.id]);
  }

  console.log(location)

  return (
    <LangContext.Provider value={lang}>
      <Languages>
        <Lang id='hu' type='ln' src={hu} onClick={click}></Lang>
        <Lang id='en' type='ln' src={en} onClick={click}></Lang>
      </Languages>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Navigation clickOnMenu={clickOnMenu} setClick={setClick} />} >
            <Route path="/aboutMe" element={<></>} />
            <Route path="/hobbies" element={<></>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/goals" element={<></>} />
            <Route path="/references" element={<References />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </LangContext.Provider>
  )
}


const Languages = styled.div`
  margin: 10px;
  display: flex;
  gap: 5px;
  position: absolute;
  right: 0;
  z-index: 1000;

  @media screen and (max-width: 768px){
    position: fixed;
  }
`
const Lang = styled.img`
  width: 40px;
  cursor: pointer;

  &:hover{
    transform: scale(1.2);
  }
`