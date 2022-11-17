import { Grid } from "@mui/material";
import LineChart from "../Components/chart/chart";


const Charts = () => {
    return ( 
        <Grid container p={2} my={'auto'} justifyContent="center">
         <LineChart/>
         <LineChart/>
        </Grid>
 
     );
}
 
export default Charts;