import React from 'react'
import './Header.css';

export default ({black}) => {
    return (
      <header className={black ? 'black' : ''}>
          <div className="header--logo">
              <a href="/">
                  <img src="https://img.elo7.com.br/product/original/2F57C45/poster-impresso-netflix-logo-basquete.jpg" alt="Netflix" />
              </a>
          </div>
          <div className="header--user">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix--user" />
          </div>
      </header>  
    )
}
