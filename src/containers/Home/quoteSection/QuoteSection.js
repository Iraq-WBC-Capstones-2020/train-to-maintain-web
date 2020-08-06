import React, { useEffect, useState } from 'react';
import './QuoteSection.css';
const QuoteSection = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuotes();
  }, []);
  const fetchQuotes = () => {
    fetch('https://type.fit/api/quotes')
      .then((resp) => resp.json())
      .then((data) => {
        setQuote(data[Math.floor(Math.random() * data.length)].text);
      });
  };

  return (
    <section className="flex justify-center items-center lg:py-32 md:py-24 py-16 quote-section ">
      <div className="  w-9/12 flex justify-center ">
        <h1 className="font-bold text-secondary lg:text-4xl text-xl">
          {quote}
        </h1>
      </div>
    </section>
  );
};

export default QuoteSection;
