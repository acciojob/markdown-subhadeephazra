import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/App.css';

const App = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating an API call or any asynchronous operation
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='app'>
      <textarea
        name='text'
        id='text'
        className='textarea'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type your Markdown here...'
      ></textarea>
      <div className='preview'>
        {loading ? (
          <p className='loading'>Loading...</p>
        ) : (
          <ReactMarkdown key={text}>{text}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default App;
