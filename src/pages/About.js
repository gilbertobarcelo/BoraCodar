import React from 'react';
import { Link } from 'react-router-dom';
function SobreEmpresa(){
    return(
        <div>
        <h1>Sobre</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default SobreEmpresa;