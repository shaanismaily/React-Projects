import { useEffect, useState } from "react";

function useDebounce(value, delay = 400) {
    
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)

        return () => clearTimeout(timer);
    }, [value, delay])

    return debouncedValue;
}

export default useDebounce;