import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './App.css';
import QuoteBox from './QuoteBox';


const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];

const App = () => {
  const [quote, setQuote] = useState(''); 
  const [author, setAuthor] = useState(''); 
  const [color, setColor] = useState('#16a085'); 

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      const quotes = response.data.quotes; 
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
      setQuote(randomQuote.quote); 
      setAuthor(randomQuote.author || 'Unknown'); 
      changeColor(); 
    } catch (error) {
      console.error('Error fetching the quotes', error); 
    }
  };


  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className='App' style={{ backgroundColor: color, color: color }}>
      <QuoteBox 
        quote={quote}
        author={author}
        fetchQuote={fetchQuote}
        color={color}
      />
    </div>
  );
}

export default App;
