import {Grid} from "@mui/material";
import AddMoneyHeader from "../Components/AddMoney/AddMoneyHeader";
import AddMoneyForm from "../Components/AddMoney/AddMoneyForm";
import { useParams } from "react-router-dom";


const AddMoney = (): JSX.Element => {

    return (
        <Grid container p={2}>
            <AddMoneyHeader/>
            <AddMoneyForm/>
        </Grid>
    )
}

export default AddMoney