import ResultBox from "../ResultBox/ResultBox"
import Button from "../Button/Button"

function Output() {

    return (
      <div className="bg-teal-800 w-[50%] rounded-[20px] p-[20px] flex flex-col justify-between">
      <div>
        <ResultBox top="Tip Amount" amount="0.00"/>
        <ResultBox top="Total" amount="1.36"/>
      </div>
      <Button custom={2} text={"Reset"}/>
      </div>
      
    )
  }
  
  export default Output
  