import './App.css'
import Button from './Button/Button'
import Input from './Input/Input'
import Output from './Output/Output'
import { useEffect, useState } from "react"

function App() {

  const [tipAmount, setTipAmount] = useState(0);

  useEffect(() => {
    console.log(`Tip: ${tipAmount*100}%`);
  }, [tipAmount])

  const bc5 = () => {
    setTipAmount(0.05);
  }

  const bc10 = () => {
    setTipAmount(0.10);
  }

  const bc15 = () => {
    setTipAmount(0.15);
  }

  const bc25 = () => {
    setTipAmount(0.25);
  }

  const bc50 = () => {
    setTipAmount(0.50);
  }

  const bc0 = () => {
    setTipAmount(0.00);
  }
 

  return (
    <>
      <div className="w-[800px] flex h-[400px] bg-white rounded-[20px] p-[20px]">
  
        <Input bc5 = {bc5} bc10= {bc10} bc15 = {bc15} bc25= {bc25} bc50 = {bc50} bc0= {bc0}/>
        <Output/>

      </div>
    </>
  )
}

export default App
