import {Container, Typography, Grid} from "@mui/material"
import InputeAmount from "./components/InputeAmount"
import SelectCountary from "./components/SelectCountary"
import SwitchCurrency from "./components/SwitchCurrency"
import {useContext} from "react"
import { CurrencyContext } from "./contxt/currencyContex"
// import wrong thing from currency context 

function App() {


  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } = useContext(CurrencyContext);

  const StyleBox = {
    background: "#fdfdfd",
    marginTop: "10rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 5,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    position: "relative"
  };
  

  return (
    <Container maxWidth="md" sx={StyleBox}>
      <Typography variant="h5" sx={{ marginBottom: "2rem" }}>Stay Ahead with Accurate Conversions</Typography>
      <Grid container spacing={2}>
        <InputeAmount />
        <SelectCountary value={fromCurrency} setValue={setFromCurrency} label="From" />
        <SwitchCurrency />
        <SelectCountary value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>
    </Container>
  );
}

export default App;
