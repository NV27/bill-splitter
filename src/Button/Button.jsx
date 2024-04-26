import { useState } from "react"


function Button({myFuction, custom = 0, text = "0%"}) {

  let cl="bg-teal-800 rounded-[5px] text-white px-[20px] py-[10px] min-w-[100px] hover:bg-teal-700 active:bg-teal-600"

  if (custom === 1) {
    cl = "bg-gray-300 rounded-[5px] text-gray-800 px-[20px] py-[10px] hover:bg-gray-200 active:bg-gray-100"
  }

  if (custom === 2) {
    cl = "bg-gray-300 opacity-30 rounded-[5px] text-gray-800 px-[20px] py-[10px]"
  }

    return (
      <>
        <button className={cl} onClick={myFuction}>{text}</button>
      </>
    )
  }
  
  export default Button
  