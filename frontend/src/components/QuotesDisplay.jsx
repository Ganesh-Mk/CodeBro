import React, { useState, useEffect } from "react";
import { codeQuotes } from "../javascripts/codequotes.js"; // Adjust the import path if necessary

const QuotesDisplay = () => {
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    const getStoredQuote = () => {
      const storedQuote = localStorage.getItem("quoteOfTheDay");
      const storedDate = localStorage.getItem("quoteDate");
      const today = new Date().toISOString().split("T")[0];

      if (storedQuote && storedDate === today) {
        return storedQuote;
      }
      return null;
    };

    const setStoredQuote = (quote) => {
      const today = new Date().toISOString().split("T")[0];
      localStorage.setItem("quoteOfTheDay", quote);
      localStorage.setItem("quoteDate", today);
    };

    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * codeQuotes.quotes.length);
      return codeQuotes.quotes[randomIndex];
    };

    const quote = getStoredQuote();
    if (quote) {
      setCurrentQuote(quote);
    } else {
      const newQuote = getRandomQuote();
      setStoredQuote(newQuote);
      setCurrentQuote(newQuote);
    }
  }, []);

  return (
    <div className="sec2">
      <p>"{currentQuote}"</p>
    </div>
  );
};

export default QuotesDisplay;
