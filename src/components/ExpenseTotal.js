import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const ExpenseTotal = () =>{
    const {expenses} = useContext(AppContext)
    // method reduce is used to iterate over each item to accumlate the cost, initialised
    // with an value of 0
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return(
        <div className="alert alert-primary">
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    )
}

export default ExpenseTotal