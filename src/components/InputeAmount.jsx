import {Grid, TextField, InputAdornment} from "@mui/material"


const InputeAmount = () => {
    return (
        <Grid item xs={12} md>
            <TextField 
            label="Amount"
            fullWidth
            InputProps={{
                type: "number",
                startAdornment: <InputAdornment position="start">$</InputAdornment>
            }}
            >   
            </TextField>
        </Grid>
        )
}

export default InputeAmount