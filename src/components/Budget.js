import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

const Budget = () => {
    // using the budget context
    const { dispatch, budget, expenses, currency } = useContext(AppContext);

    // function to update the budget
    const [newBudget, setNewBudget] = useState(budget)
    const handleBudget = (event) => {
        const newValue = event.target.value
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        // perform validation:
        if (newValue > 20000) {
            alert("Budget Allocated cannot be higher than 20,000 !")
            return
        }
        else if (newValue < totalExpenses) {
            alert("Budget Allocated cannot be lower than what is spent so far!")
            return
        }
        else {
            // update the local state
            setNewBudget(newValue)

            // update into the APP Redux
            dispatch({ type: "SET_BUDGET", payload: newBudget })

        }
    }

    return (
        <div className="alert alert-secondary container">
            <span classname= "col-sm">Budget: {currency[0]}{newBudget}</span>
            <input className="mx-3" style={{width:"40%"}} type="number" step="10" value={newBudget} onChange={handleBudget}></input>
        </div>
    )
}

export default Budget;