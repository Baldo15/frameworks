import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/navBar';
import Barra from './components/SearchBar';
import Post from './components/Post';
import logo from './images/soft.jpeg';
import logo2 from './images/soft2.jpeg';
import logo3 from './images/soft.jpeg';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header  text="Three pics"/>
    <Barra />
    <Post tiempo='10' likes=' 300' autor='Baldo' texto='un gran dia en la oficina' comentarios = '1' imagen={logo}/>
    <Post tiempo='25' likes=' 90' autor='Kevin' texto='un gran bello dia en el estadio apoyando al equipo' comentarios = '99' imagen={logo2}/>
    <Post tiempo='57' likes=' 80' autor='Ruben' texto='compartir en la oficina' comentarios = '17' imagen={logo3}/>
  </React.StrictMode>
);

