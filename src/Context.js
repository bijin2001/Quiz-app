import { createContext, useContext, useState } from "react";

const ContextPoint = createContext();

export const useContextPoint = () => useContext(ContextPoint);
export const PointProvider = ({children}) =>{

    const [pointValue,setPointValue] = useState([]);
    const addPoints = (option, value) => {

        setPointValue(prevPoints => [...prevPoints, {option,value}]);
    };

    return(

        <ContextPoint.Provider value={{pointValue, addPoints}}>
            {children}
        </ContextPoint.Provider>
        
    )

}