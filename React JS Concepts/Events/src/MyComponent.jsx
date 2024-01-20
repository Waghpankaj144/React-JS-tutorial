import React, {useState} from 'react'

function MyComponent() {
    const [name, setName] = useState();
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState();

    function handleNameChange (e){
            setName(e.target.value)  //this will change the nae into real time
    }

    function handlePaymentChange (e){
            setPayment(e.target.value)  //this will change the nae into real time
    }

    function handleShippingChange (e){
            setShipping(e.target.value)  //this will change the nae into real time
    }
  return (
    <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>name : { name}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select </option>
            <option value="Visa">Visa </option>
            <option value="Mastercard">Mastercard </option>
            <option value="Phonepe">Phonepe </option>
        </select>
        <p>Payment : {payment}</p>

        <label> 
            <input value={"pickup"} onChange={handleShippingChange} type="radio" checked={shipping === "pickup"}/>
            Pick Up
        </label>
            <br />
        <label> 
            <input value={"delivery"} onChange={handleShippingChange} type="radio" checked={shipping === "delivery"}/>
            Delivery
        </label>
      <p>shipping :  {shipping}</p>
    </div>
  )
}

export default MyComponent