import { useState } from "react"

const useMatrixHandle = (matrixLimit, selectionLimit) => {
    const [tracking, setTracking] = useState([]);
    const handleClick = (e) => {
        const name = e.target.name;
        if(tracking.length > selectionLimit - 1){
            if(!tracking.includes(name))
            setTracking(tracking.filter(( _, index ) => index !== 0))
        }
        setTracking((preState) => {
            if(!tracking.includes(name))
                return [...preState, name]
            else
                return preState
        })
    }
    const matrixIndexArray = Array(matrixLimit).fill().map((_, idx)=> 1 + idx)
    return { matrixIndexArray, tracking, handleClick }
}

export default useMatrixHandle