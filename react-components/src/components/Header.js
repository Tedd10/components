import React from 'react';

function Header({ title, home, about, projects, contact }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>{home}</li>
          <li>{about}</li>
          <li>{projects}</li>
          <li>{contact}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
