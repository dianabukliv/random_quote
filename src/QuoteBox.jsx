import React from 'react';
import './App.css';

const QuoteBox = ({ quote, author, color, fetchQuote }) => {
  return (
    <>
      <div id="quote-box" className='quote_box' style={{ color: color }}>
        <h1 id="text" className='quote_text'>{quote}</h1>
        <h5 id="author" className='quote_author'>- {author}</h5>
        <div className='buttons'>
          <a
            id="tweet-quote"
            className="twitter"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`} 
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: color }}
          > 
            Tweet
          </a>
          <button
            id="new-quote"
            className='button'
            onClick={fetchQuote}
            style={{ background: color }}
          >
            New Quote
          </button>
        </div>
      </div>
    </>
  );
}

export default QuoteBox;
