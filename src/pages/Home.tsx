import {Grid} from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Total from "../Components/Home/Total";
import MoneyCard from "../Components/Home/MoneyCard";
import LineChart from "../Components/chart/chart";

const Home = (): JSX.Element => {
    return (
        <Grid container p={2}>
            
            <Total/>
            <MoneyCard backgroundColor={'success.main'} title={'هزینه ها'} icon={<TrendingUpIcon sx={{color:'green'}}/>} type={'income'}/>
            <MoneyCard backgroundColor={'error.main'} title={'خرج ها'} icon={<TrendingDownIcon sx={{color:'red'}}/>} type={'expense'}/>
        </Grid>
    )
}

export default Home