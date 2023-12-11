import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const ExpenseItem = (props) => {
    // utilise the reducer defined in the redux
    const { dispatch, currency } = useContext(AppContext)

    // construct the action of delete expenses
    const handleDeleteExpense = () => {
        dispatch({ type: "DELETE_EXPENSE", payload: props.id })
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

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }
        dispatch({type:'RED_EXPENSE', payload: expense})
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency[0]}{props.cost}</td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" onClick={event => increaseAllocation(props.name)}>
                    <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M21,14h6v20h-6V14z"></path><path fill="#fff" d="M14,21h20v6H14V21z"></path>
                </svg>
            </td>
            <td>
                <img width="40" height="40" src="https://img.icons8.com/color/48/minus.png" alt="minus" onClick={event => decreaseAllocation(props.name)}/>
            </td>
            <td><span size='1.5em' onClick={handleDeleteExpense}>X</span></td>
        </tr>
    );
}

export default ExpenseItem;