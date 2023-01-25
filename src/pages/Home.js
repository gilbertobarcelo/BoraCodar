import React from 'react';
import { Link } from 'react-router-dom';
import  "../assets/Styles/button.css";

function Main(){
    return(
       
      <div className=''>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">Sobre nos</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/botao"> Botões</Link>
          </li>
        </ul>
      </nav>
    </div>
    );
};

export default Main;


