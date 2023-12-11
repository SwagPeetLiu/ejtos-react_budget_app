import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

const Budget = () =>{
    // using the budget context
    const budget  = useContext(AppContext).budget;
    // hooks for keep track of the state of the budget
    const [newBudget, setNewBudget] = useState(budget)

    // function to update the budget
    const handleBudget = (event) =>{
        setNewBudget(event.target.value)
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudget}></input>
        </div>
    )
}

export default Budget;