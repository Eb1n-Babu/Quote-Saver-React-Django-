import React, {useEffect} from 'react';
import axios from "axios";

function App(props) {

    const [Quotes, setQuotes] = React.useState([]);
    const [form, setForm] = React.useState({ author: '', text: '' });

    useEffect(() => {
        axios.get('http://localhost:8000/api/quotes/')
            .then(response => setQuotes(response.data))
    },[])

    const submitQuote = () => {
        axios.post('http://localhost:8000/api/quotes/', form)
            .then(response => setQuotes([...Quotes, response.data]))
    }

    return (
        <div>
            <h1>Quotes Saver</h1>
            <input placeholder="author"
            onChange={(event)=>setForm({...form,author: event.target.value})}/>
            <input placeholder="text"
            onChange={(event)=>setForm({...form,text: event.target.value})}/>
            <button onClick={submitQuote}>Submit</button>
            <ul>
                {Quotes.map((quote => <li key={quote.id}><strong>{quote.author} : </strong>{quote.text}</li>))}
            </ul>
        </div>
    );
}

export default App;