import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'This is an example',
    content: 'Content is revealed by a click',
  },
  {
    title: 'What is the capital of Switzerland?',
    content: 'Bern',
  },
  {
    title: 'What is powering this site',
    content: 'React ;)',
  },
];

export default () => {

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
