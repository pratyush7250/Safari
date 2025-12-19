import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000"
    const [food_list, setFoodList] = useState([])

    const getTotalCartAmount = () => {
       return 3;
    }


  
    const contextValue = {
        food_list,
        getTotalCartAmount,
        url,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
