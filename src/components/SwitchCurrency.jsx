import {Grid, Button} from "@mui/material"
import { useState } from "react"
// import  compare from "../17139671571638266564-128.png"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const SwitchCurrency = () => {
   const [fromCurrency, setFromCurrency] = useState()
   const [toCurrency, setToCurrency] = useState()

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
                {/* {"Icon"} */}
            <CompareArrowsIcon sx={{fontSize: 30}}/>
            </Button>
        </Grid>
    )
}

export default SwitchCurrency