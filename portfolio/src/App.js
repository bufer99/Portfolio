import { useEffect, useRef, useState } from 'react';
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


export default function App() {
  const location = useLocation();

  return (
    
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Navigation />} />
          <Route path="/aboutMe" element={<Navigation />} />
          <Route path="/hobbies" element={<Navigation />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/goals" element={<Navigation />} />
          <Route path="/references" element={<References />} />

        </Routes>
      </AnimatePresence>

  )
}

