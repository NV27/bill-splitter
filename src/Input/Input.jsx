import Button from "../Button/Button"
import BillAmount from "../BillAmount/BillAmount"
import NoPeople from "../NoPeople/NoPeople"

function Input({bc5, bc10, bc15, bc25, bc50, bc0}) {

  const billNo = () => {
    console.log("billNo");
  }

    return (
      <div className="w-[50%] p-[20px]">
        <div className="mb-[30px]">
          <BillAmount myFunc={0}/>
        </div>
        <div>
          <p className="text-left">Select Tip %</p>
          <div className="flex flex-wrap gap-[10px] mb-[30px]">
            <Button myFuction={bc5} text={"5%"}/>
            <Button myFuction={bc10} text={"10%"}/>
            <Button myFuction={bc15} text={"15%"}/>
            <Button myFuction={bc25} text={"25%"}/>
            <Button myFuction={bc50} text={"50%"}/>
            <Button myFuction={bc0} custom={1} text={"Custom"}/>
        </div>
        </div>
        <div>
          <NoPeople/>
        </div>
      </div>
    )
  }
  
  export default Input
  