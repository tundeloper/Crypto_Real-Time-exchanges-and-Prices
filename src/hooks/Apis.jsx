import { useEffect, useState } from "react";
import axios from "axios";

export const useCountries = (url) => { 
    const [countriesData, setCountriesData] = useState([]);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoaded(true);
                const response = await axios(url);
                setCountriesData(response.data);
            } catch (error) {
                setError(error);
                console.log("API Error:", error)
            } finally {
                setLoaded(false);
            }
        };
        
        fetchData(); // Call the fetchData function to initiate the API call
    }, [url]);

    return [countriesData, error, loaded];
};

export default useCountries