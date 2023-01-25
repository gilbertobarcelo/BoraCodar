import React from 'react';
import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
        <h1>Sobre</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Contato;