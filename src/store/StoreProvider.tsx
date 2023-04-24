import React, { createContext ,useReducer} from 'react'
import storeReducer, {initialStore} from './storeReducer'

const StoreContext:any = createContext(null)

const StoreProvider = ({children}:any) => {

    const [store,dispatch]= useReducer(storeReducer,initialStore)

    return (
        <StoreContext.Provider value={[store,dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export {StoreContext}
export default StoreProvider;
