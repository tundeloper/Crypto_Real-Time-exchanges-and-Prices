import { Grid, Autocomplete, TextField } from "@mui/material";
import React from "react";
import countries from "../hooks/Apis";

const SelectCountry = () => {
    const [countriesData, error, loaded] = countries("https://restcountries.com/v3.1/all");
    
    console.log(countriesData, error);

    return (
        <Grid item xs={12} md={3}>
            <Autocomplete
                options={countriesData.map((country) => country.name.common)}
                loading={loaded}
                renderInput={(params) => <TextField {...params} label="Select Country" />}
            />
        </Grid>
    );
};

export default SelectCountry;