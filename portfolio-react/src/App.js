import './App.css';
import { Layout } from './components/Layout';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { References } from './components/References/References';
import { Skills } from './components/Skills/Skills';
import { About } from './components/About';
import { AnimatePresence } from "framer-motion"


export default function App() {
  const location = useLocation();

  return (
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={ <Layout/>} >
            <Route path="/aboutMe" element={<About/>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/goals" element={<></>} />
            <Route path="/references" element={<References />} />
          </Route>
        </Routes>
      </AnimatePresence>
  )
}