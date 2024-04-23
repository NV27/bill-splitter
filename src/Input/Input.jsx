import Button from "../Button/Button"
import BillAmount from "../assets/BillAmount/BillAmount"

function Input() {

  const buttonClick = () => {
    console.log("hey I'm a button")
  }

    return (
      <div className="input-side">
        <BillAmount/>
        <div className="select-tip">
          <Button funkyKong={buttonClick}/>
          <Button funkyKong={buttonClick}/>
          <Button funkyKong={buttonClick}/>
          <Button funkyKong={buttonClick}/>
        </div>
      </div>
    )
  }
  
  export default Input
  