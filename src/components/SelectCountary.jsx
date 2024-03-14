import { useCountries } from "../hooks/Apis"; 
import {Grid, Autocomplete, TextField} from "@mui/material"

const SelectCountry = () => {
    const [countriesData, error, loaded] = useCountries("https://restcountries.com/v3.1/all");
    
    console.log("countriesData, countriesData",countriesData,);
    if(loaded){
        return(
            <div>Loading...</div>
        )
    }
    if(error){
        return(
            <dive>Error: {error.message}</dive>
        )
    }
    return (
        <Grid item xs={12} md={3}>
            <Autocomplete
                options={countriesData.map((country) => country.name.common)}
                renderInput={(params) => <TextField {...params} label="Select Country" />}
            />
        </Grid>
    );
};

export default SelectCountry;