import Button from "../Button/Button"
import BillAmount from "../assets/BillAmount/BillAmount"

function Input() {

  const buttonClick = () => {
    console.log("hey I'm a button")
  }

    return (
      <div className="w-[50%] p-[20px]">
        <div className="mb-[30px]">
          <BillAmount/>
        </div>
        <div>
          <p className="text-left">Select Tip %</p>
          <div className="flex flex-wrap gap-[10px] mb-[30px]">
            <Button funkyKong={buttonClick}/>
            <Button funkyKong={buttonClick}/>
            <Button funkyKong={buttonClick}/>
            <Button funkyKong={buttonClick}/>
            <Button funkyKong={buttonClick}/>
            <Button funkyKong={buttonClick}/>
          </div>
        </div>
        <div>
          <p>Number of people</p>
          <input className="border-2 bg-teal-100 w-[100%] rounded" type="text"/>
        </div>
      </div>
    )
  }
  
  export default Input
  