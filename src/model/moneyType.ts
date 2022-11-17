export interface MoneyType {
    id: number,
    type: 'income' | 'expense' | '',
    title: string,
    price: string,
    month: string
}
// export interface MoneyTypeArry  {
//     id: number,
//     // type: 'income' | 'expense' | '',
//     total:number,
//     //title: string,
//     income:number,
//     expense:number,
//     //price: string,
//     month: string,
//     incomes:MoneyType[],
//     expenses:MoneyType[]
// }

