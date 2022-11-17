import {Divider, Grid, IconButton, Paper, styled, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {ReactNode, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MoneyType} from "../../model/moneyType";
import { removeMoney, updateMoney } from "../../redux/slice/moneySlice";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";



interface MoneyCardProps {
    backgroundColor: string,
    title: string,
    icon: ReactNode,
    type: string
}

const MoneyCard = ({backgroundColor, title, icon, type}: MoneyCardProps): JSX.Element => {
    const moneyArr = useSelector((state: { money: MoneyType[] }) => state.money)
    const CustomIconBtn = styled(IconButton)({
        // color:backgroundColor
    })
    const dispatch=useDispatch()
    const handleDelete = useCallback((id:number)=>{
       dispatch(removeMoney(id))
    },[moneyArr])
    // const handleUpdate = useCallback((m:MoneyType)=>{
    //    dispatch(updateMoney(m))
    // },[moneyArr])

    return (
      <Paper sx={{width:{xs:'100%',sm:"45%",md:'30%'},mx:1,my:1}}>
        <Grid container item xs={12}  my={2}
               p={2} borderRadius={2} >
            <Grid container item xs={12}>
                <Grid item xs={6}>
                    <Typography>
                        {title}
                    </Typography>
                </Grid>
                <Grid display={'flex'} justifyContent={'flex-end'} item xs={6}>
                    {icon}
                </Grid>
                {moneyArr.filter(money => money.type === type).map(m => (
                  <>
                    <Grid key={m.id} container item xs={12} alignItems={'center'}>
                        <Grid item xs={4.5}>
                            {m.title}
                        </Grid>
                        <Grid item xs={4.5}>
                            {m.price} تومان
                        </Grid>
                        <Grid item xs={1.5}>
                            <CustomIconBtn onClick={()=>handleDelete(m.id)}>
                                <DeleteIcon sx={{color:'primary.light'}}/>
                            </CustomIconBtn>
                        </Grid>
                        <Grid item xs={1.5}>
                         <Link to={`/update/${m.id}`}>
                            <CustomIconBtn  >
                                <ModeEditIcon sx={{color:'primary.light'}}/>
                            </CustomIconBtn>
                          </Link>    
                        </Grid>
                        <Divider  sx={{ backgroundColor:'red',color:'red'}} />
                    </Grid>
                    <Divider  sx={{ backgroundColor:'red'}} />
                 </>
                ))}
            </Grid>
        </Grid>
      </Paper>
    )
}

export default MoneyCard