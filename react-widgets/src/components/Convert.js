import React, { useState, useEffect } from "react"
import axios from 'axios';

function Convert({ language, text }){
  const [debouncedText, setDebouncedText] = useState('');
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText,
          target: language.value,
          // key: '',
        }
      });
      setTranslatedText(data.data.translations[0].translatedText)
    };

    if (debouncedText) {
      doTranslation();
    }
  }, [language, debouncedText]);
  return(
    <div>
      <h2 className="ui header">{translatedText}</h2>
    </div>
    )
}

export default Convert
