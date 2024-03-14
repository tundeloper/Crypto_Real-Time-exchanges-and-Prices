import {Grid, Button} from "@mui/material"
import  compare from "../17139671571638266564-128.png"
// import CompareArrowIcon from "@mui/icon-material/CompareArrowIcon"


const SwitchCurrency = () => {
    return(
        <Grid item xs={12} md="auto">
            <Button sx={{
                boderRadius: 1,
                height: "%100"
            }}>
                {"Icon"}
            {/* <CompareArrowIcon sx={{fontSize: 30}}/> */}
            </Button>
        </Grid>
    )
}

export default SwitchCurrency