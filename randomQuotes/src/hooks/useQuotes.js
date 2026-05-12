import { useState, useEffect } from "react";

const useQuotes = () => {
    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchQuote = async() => {
        setLoading(true);

        try { 
            const response = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");
        
            const result = await response.json();
            setQuote(result.data);

        } catch (error) {
            console.log("Unable to fetch a quote", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=> {
        fetchQuote()
    }, [])

    return {quote, loading, fetchQuote};
}

export default useQuotes;