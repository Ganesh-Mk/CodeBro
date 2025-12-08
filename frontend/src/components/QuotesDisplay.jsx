import React, { useState, useEffect } from "react";

const QuotesDisplay = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStoredQuote = () => {
      const storedQuote = localStorage.getItem("quoteOfTheDay");
      const storedAuthor = localStorage.getItem("quoteAuthor");
      const storedDate = localStorage.getItem("quoteDate");
      const today = new Date().toISOString().split("T")[0];

      if (storedQuote && storedDate === today) {
        return { content: storedQuote, author: storedAuthor };
      }
      return null;
    };

    const setStoredQuote = (quote) => {
      const today = new Date().toISOString().split("T")[0];
      localStorage.setItem("quoteOfTheDay", quote.content);
      localStorage.setItem("quoteAuthor", quote.author);
      localStorage.setItem("quoteDate", today);
    };

    const fetchQuote = async () => {
      try {
        const controller = new AbortController();
        const res = await fetch("https://api.quotable.io/quotes/random?limit=1", {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        return data[0];
      } catch (err) {
        if (err.name !== "AbortError") throw err;
      }
    };

    const loadQuote = async () => {
      const stored = getStoredQuote();
      if (stored) {
        setCurrentQuote(stored);
        setLoading(false);
      } else {
        try {
          const quote = await fetchQuote();
          if (quote) {
            setStoredQuote(quote);
            setCurrentQuote(quote);
          }
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    };

    loadQuote();
  }, []);

  if (loading) return <div className="sec2"><p>Loading…</p></div>;
  if (error) return <div className="sec2"><p style={{ color: "crimson" }}>{error.message}</p></div>;
  if (!currentQuote) return <div className="sec2"><p>No quote found.</p></div>;

  return (
    <div className="sec2">
      <blockquote>
        <p>"{currentQuote.content}"</p>
      </blockquote>
    </div>
  );
};

export default QuotesDisplay;
