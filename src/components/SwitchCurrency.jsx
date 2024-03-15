import {Grid, Button} from "@mui/material"
import {  useContext } from "react"
// import  compare from "../17139671571638266564-128.png"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import  { CurrencyContext } from "../contxt/currencyContex";

const SwitchCurrency = () => {

const { 
    fromCurrency, 
    setFromCurrency, 
    toCurrency, 
    setToCurrency } = useContext(CurrencyContext);

   const handleSwich = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
   }
    return(
        <Grid item xs={12} md="auto">
            <Button onClick={handleSwich}sx={{
                boderRadius: 1,
                height: "%100"
            }}>
            <CompareArrowsIcon sx={{fontSize: 30}}/>
            </Button>
        </Grid>
    )
}

export default SwitchCurrency