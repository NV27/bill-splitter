

function Button({funkyKong = null, custom = 0, text = "0%"}) {

  let cl="bg-teal-800 rounded-[5px] text-white px-[20px] py-[10px] min-w-[100px]"

  if (custom === 1) {
    cl = "bg-gray-300 rounded-[5px] text-gray-800 px-[20px] py-[10px]"
  }

  if (custom === 2) {
    cl = "bg-gray-300 opacity-30 rounded-[5px] text-gray-800 px-[20px] py-[10px]"
  }

    return (
      <>
        <button className={cl} onClick={funkyKong}>{text}</button>
      </>
    )
  }
  
  export default Button
  