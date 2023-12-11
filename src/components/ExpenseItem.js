import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const ExpenseItem = (props) =>{
    // utilise the reducer defined in the redux
    const {dispatch} = useContext(AppContext)

    // construct the action of delete expenses
    const handleDeleteExpense = () => {
        dispatch({type: "DELETE_EXPENSE", payload: props.id})
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><span size='1.5em' onClick={handleDeleteExpense}>X</span></td>
        </tr>
    );
}

export default ExpenseItem;