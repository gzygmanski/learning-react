import React, { useState } from "react"
import Router from './Router';

import Header from './Header';
import Translate from './Translate';
import Dropdown from './Dropdown';
import Accordion from './Accordion';
import Search from './Search';

const items = [
  {
    title: 'Title 1',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  },
  {
    title: 'Title 2',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
  },
  {
    title: 'Title 3',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
  }
]

const colors = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Green',
    value: 'green'
  },
  {
    label: 'Blue',
    value: 'blue'
  },
]

const App = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return(
    <div className="ui container">
      <Header />
      <Router path="/">
        <Accordion items={items} />
      </Router>
      <Router path="/search">
        <Search />
      </Router>
      <Router path="/translate">
        <Translate />
      </Router>
      <Router path="/dropdown">
        <Dropdown
          options={colors}
          selected={selectedColor}
          onSelectedChange={setSelectedColor}
          label="Choose a Color"
        />
      </Router>
    </div>
  );
}

export default App
