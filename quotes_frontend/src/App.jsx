import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://127.0.0.1:8000/api/quotes/';

function App() {
    const [quotes, setQuotes] = useState([]);
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);

    // Load quotes on start
    useEffect(() => {
        const loadQuotes = async () => {
            try {
                const res = await axios.get(API_URL);
                setQuotes(res.data);
                // eslint-disable-next-line no-unused-vars
            } catch (err) {
                alert('Backend not running?');
            } finally {
                setLoading(false);
            }
        };
        loadQuotes();
    }, []);

    const addQuote = async (e) => {
        e.preventDefault();
        if (!author.trim() || !text.trim()) return;

        try {
            await axios.post(API_URL, { author: author.trim(), text: text.trim() });
            setAuthor('');
            setText('');

            // Refresh quotes
            const res = await axios.get(API_URL);
            setQuotes(res.data);
        } catch (err) {
            alert('Failed to save quote');
        }
    };

    return (
        <div className="container">
            <h1>Quote Wall</h1>
            <p className="subtitle">Add inspiring quotes</p>

            <form onSubmit={addQuote} className="quote-form">
                <input
                    type="text"
                    placeholder="Author (e.g. Nietzsche)"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                    placeholder="Write the quote here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows="3"
                />
                <button type="submit">Add Quote</button>
            </form>

            {loading ? (
                <p className="loading">Loading quotes...</p>
            ) : quotes.length === 0 ? (
                <p className="empty">No quotes yet. Be the first!</p>
            ) : (
                <div className="quotes-grid">
                    {quotes.map((q) => (
                        <div key={q.id} className="quote-card">
                            <p className="quote-text">"{q.text}"</p>
                            <p className="quote-author">— {q.author}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;