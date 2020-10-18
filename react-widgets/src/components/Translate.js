import React, {useState} from "react"

import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Polish',
    value: 'pl'
  },
  {
    label: 'Afrikaans',
    value: 'af'
  },
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return(
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
}

export default Translate
// google translate api is not free
// use this key from udemy course which works only on localhost:3000
// key was here!!
