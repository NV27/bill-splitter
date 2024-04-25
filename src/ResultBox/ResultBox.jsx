
function ResultBox({top, amount}) {


    return(
        <div className="flex justify-between bg-orange-400 mt-[25px] px-[10px]">
            <div className="flex flex-col text-left">
                <p className="text-white">{top}</p>
                <p className="text-gray-500">/ person</p>
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-4xl">£{amount}</h2>
            </div>
        </div>
    )

}

export default ResultBox