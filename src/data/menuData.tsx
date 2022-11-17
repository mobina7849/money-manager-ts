import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AddCardIcon from '@mui/icons-material/AddCard';
import { ReactNode } from 'react';
 interface MenuItemType{
    id:number,
    title:string,
    href:string,
    icon:ReactNode
}
//change format ts to tsx for icon type problem
export  const menuData:MenuItemType[]=[
    {id:1,title:'خانه',href:'/',icon:<HomeIcon/>},
    {id:2,title:'نمودارها',href:'/charts',icon:<InsertChartIcon/>},
    {id:3,title:'اضافه کردن دخل و خرج جدید',href:'/addMoney',icon:<AddCardIcon/>},
]
