import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='container'>
      <h1>Math Magician</h1>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/calculator'>Calculator</Link>
          </li>
          <li>
            <Link to='/quote'>Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
