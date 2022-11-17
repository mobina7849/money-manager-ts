import { AddMoneyFormOptionsType } from "./AddMoneyFormOptions"

// interface AddMoneyFormMonthType extends AddMoneyFormOptionsType{
//   value:string
// }
// for override value on AddMoneyFormOptionsType
interface AddMoneyFormMonthType extends Omit<AddMoneyFormOptionsType, 'value'>{
  value:string
}
export const AddMoneyFormMonth: AddMoneyFormMonthType[] = [
    {id: 1, value: 'farvardin', title: 'فروردین'},
    {id: 2, value: 'ordibehesht', title: 'اردیبهشت'},
    {id: 3, value: 'khordad', title: 'خرداد'},
    {id: 4, value: 'tir', title: 'تیر'},
    {id: 5, value: 'mordad', title: 'مرداد'},
    {id: 6, value: 'shahrivar', title: 'شهریور'},
    {id: 7, value: 'mehr', title: 'مهر'},
    {id: 8, value: 'aban', title: 'آبان'},
    {id: 9, value: 'azar', title: 'آذر'},
    {id: 10, value: 'dey', title: 'دی'},
    {id: 11, value: 'bahman', title: 'بهمن'},
    {id: 12, value: 'esfand', title: 'اسفند'},
]