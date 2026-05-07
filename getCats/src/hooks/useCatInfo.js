import { useState, useEffect } from "react";

const useCatInfo = () => {
    const [catInfo, setCatInfo] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchCat = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://api.freeapi.app/api/v1/public/cats/cat/random")
            
            const result = await response.json();
            setCatInfo(result.data);

        } catch (error) {
            console.log("Unable to fetch cat data", error);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCat()
    }, [])

    return {catInfo, loading, fetchCat};
}

export default useCatInfo;