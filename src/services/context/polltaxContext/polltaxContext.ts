import { createContext, useReducer } from "react"
import polltaxReducer from "./polltaxReducer"


const INITIAL_STATE = {
    polltax: [],
    loading: false,
    error: false
}

export const PolltaxContext = createContext(INITIAL_STATE)

export const PolltaxContextProvider = ({children}: any) => {

    const [state, dispatch] = useReducer(polltaxReducer, INITIAL_STATE)

    return(
        <PolltaxContext.Provider value={{
            polltax: state.polltax,
            loading: state.loading,
            error: state.error,
            dispatch
        }}>
            {children}
        </PolltaxContext.Provider>
    )

}
