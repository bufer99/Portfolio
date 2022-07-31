import { useEffect, useRef, useState } from 'react';
import './App.css';
import styled from 'styled-components'
import { Navtigation } from './components/Navigation';


export default function App() {

  return (
    <Home>
      <Navtigation />
    </Home>
  )
}

const Home = styled.div`
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`