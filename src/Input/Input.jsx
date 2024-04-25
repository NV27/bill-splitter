import Button from "../Button/Button"
import BillAmount from "../BillAmount/BillAmount"
import TipSelector from "../TipSelector/TipSelector"
import NoPeople from "../NoPeople/NoPeople"

function Input() {

  const BillNo = () => {

  }

    return (
      <div className="w-[50%] p-[20px]">
        <div className="mb-[30px]">
          <BillAmount myFunc={BillNo}/>
        </div>
        <div>
          <TipSelector/>
        </div>
        <div>
          <NoPeople/>
        </div>
      </div>
    )
  }
  
  export default Input
  