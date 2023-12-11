import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"

const CurrencyChanger = () => {
    const { currency, dispatch } = useContext(AppContext)
    const [currentCurrency, setCurrentCurrency] = useState(currency)
    const setCurrency = (newCurrency) => {
        setCurrentCurrency(newCurrency)
        dispatch({ type: "CHG_CURRENCY", payload: newCurrency})
    }

    return (
        <div className="alert alert-success container">
            <span className="mx-3">Currency: </span>
            <select onChange={(event) => setCurrency(event.target.value)} value={currency} style = {{width:"40%"}}>
                <option>$ Dollar</option>
                <option>£ Pound</option>
                <option>€ Euro</option>
                <option>₹ Rupee</option>
            </select>
        </div>
    )
}

export default CurrencyChanger