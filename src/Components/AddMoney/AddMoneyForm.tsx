import {Button, Grid, TextField} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {MoneyType} from "../../model/moneyType";
import {AddMoneyFormOptions} from "../../data/AddMoneyForm/AddMoneyFormOptions";
import {useDispatch, useSelector} from "react-redux";
import {addMoney, updateMoney} from "../../redux/slice/moneySlice";
import AddMoneyFormDialog from "./AddMoneyFormDialog";
import { useParams } from "react-router-dom";
import { AddMoneyFormMonth } from "../../data/AddMoneyForm/AddMoneyFormMonth";

const AddMoneyForm = (): JSX.Element => {
    const moneyArr=useSelector((state:{money:MoneyType[]})=>state.money)
    const [disabled, setDisabled] = useState<boolean>(true)
    const [openDialog,setOpenDialog] = useState<boolean>(false)
    const [status,setStatus] = useState<string>('')
    const [form, setForm] = useState<MoneyType>({
        id: Math.floor(Math.random() * 1000),
        type: '',
        title: '',
        price: '',
        month:''

    })
    const dispatch = useDispatch()
    const {UpdateID} = useParams<string>()
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value})
    },[form])
    const handleSubmit = () => {
        if(status==='add'){
          dispatch(addMoney(form))
          
        }else{
          dispatch(updateMoney(form))
        }
        setOpenDialog(true)
        setStatus('add')
        setForm({id: Math.floor(Math.random() * 1000),
            type: '',
            title: '',
            price: '',
            month:''
        })
        }

    useEffect(() => {
        setDisabled(form.title === '' || form.price === '' || form.type === '')
    }, [form])
     useEffect(()=>{
       if(UpdateID){
          setForm(moneyArr.filter(item=>item.id===Number(UpdateID))[0]);
          setStatus('update')
        }else{
          setStatus('add')
       }
     },[])
    return (
        <Grid container item xs={12}>
            <Grid container item xs={12}>
                <Grid item xs={12} md={3} p={2}>
                    <TextField name={'type'} onChange={handleChange} select value={form.type} fullWidth
                               label={'نوع دخل و خرج'} SelectProps={{native: true}}>
                        {AddMoneyFormOptions.map(o => (
                            <option key={o.id} value={o.value}>
                                {o.title}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={3} p={2}>
                    <TextField name={'month'} onChange={handleChange} select value={form.month} fullWidth
                               label={'انتخاب ماه'} SelectProps={{native: true}}>
                        {AddMoneyFormMonth.map(o => (
                            <option key={o.id} value={o.value}>
                                {o.title}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={3} p={2}>
                    <TextField name={'title'} onChange={handleChange} value={form.title} fullWidth label={'موضوع'}/>
                </Grid>
                <Grid item xs={12} md={3} p={2}>
                    <TextField type={'number'} name={'price'} onChange={handleChange} value={form.price} fullWidth
                               label={'مبلغ'}/>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth variant={'contained'} disabled={disabled}
                        color={form.type === 'income' ? 'success' : 'error'} onClick={handleSubmit}>
                    اضافه کردن {form.type === 'income' ? 'دخل' : 'خرج'}
                </Button>
            </Grid>
            <AddMoneyFormDialog open={openDialog}/>
        </Grid>
    )
}

export default AddMoneyForm