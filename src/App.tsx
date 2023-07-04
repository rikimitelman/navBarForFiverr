import React, { ReactNode } from 'react';
import './App.css';
import Router from './Routers/Router';
import Home from './Components/home';
import SignIn from './Components/signIn';
import { FaHome, FaUser, FaSearch } from 'react-icons/fa';

function App() {
  const links: string[] = ["","home","signIn"] 
  const title: ReactNode[] = [<FaHome />, <FaUser />, <FaSearch />] 
  const components: ReactNode[] = [<>main</>,<Home/>,<SignIn/>] 
  return (
    <Router components={components} titles={title} links={links}></Router>
  );
}

export default App;
