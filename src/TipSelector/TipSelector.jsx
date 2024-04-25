import Button from "../Button/Button"


function TipSelector() {

    const buttonClick = () => {
        console.log("hey I'm a button")
      }

    return(
        <>
          <p className="text-left">Select Tip %</p>
          <div className="flex flex-wrap gap-[10px] mb-[30px]">
            <Button funkyKong={buttonClick} text={"5%"}/>
            <Button funkyKong={buttonClick} text={"10%"}/>
            <Button funkyKong={buttonClick} text={"15%"}/>
            <Button funkyKong={buttonClick} text={"25%"}/>
            <Button funkyKong={buttonClick} text={"50%"}/>
            <Button funkyKong={buttonClick} custom={1} text={"Custom"}/>
          </div>
        </>
    )

}

export default TipSelector