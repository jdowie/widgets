import React from 'react';
import Link from './Link';
import '../index.css'

const Header = () => {
  return (
    <div>
      <div className="main_title">
        <h2>React Widget Example</h2>
      </div>
      <div className="ui secondary pointing menu">
        <Link href="/" className="item">
          Accordion
        </Link>
        <Link href="/list" className="item">
          Search
        </Link>
        <Link href="/translate" className="item">
          Translate
        </Link>
      </div>
    </div>
  );
};

export default Header;
