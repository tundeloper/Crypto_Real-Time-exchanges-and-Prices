import { useCountries } from "../hooks/Apis"; 
import {Grid, Autocomplete, TextField} from "@mui/material"

const SelectCountry = () => {
    const [countriesData] = useCountries("https://restcountries.com/v3.1/all");
    
    console.log("countriesData, countriesData",countriesData,);

    return (
        <Grid item xs={12} md={3}>
            <Autocomplete
                // options={countriesData.map((country) => country.name.common)}
                options={["option1", "option2", "option3", "abdull"]}
                // loading={loaded}
                renderInput={(params) => <TextField {...params} label="Select Country" />}
            />
        </Grid>
    );
};

export default SelectCountry;