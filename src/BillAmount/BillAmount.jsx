import { useState } from "react"

function BillAmount({myFunc}) {

const newValue = () => {
  setValue(value);
}

  const [value, setValue] = useState("")

    return (
      <div>
        <h2 className="text-left">Bill</h2>
        <input id="bill-input" className="border-2 bg-gray-100 w-[100%] rounded px-[10px]" type="text" placeholder="0"/>
      </div>
    )
  }
  
  export default BillAmount
  