import React, { useContext, useEffect, useReducer } from "react";

import { commonReducer } from "./reducer";

const { createContext } = require("react");


const initialBreadCrumbData = [{ title: "sabic", key: "" }]


const initialState = {
    loading: false,
    error: null,
    breadCrumbsList: initialBreadCrumbData,
};

const CommonStateContext = createContext();
const CommonDispatchContext = createContext();

export const useCommonState = () => useContext(CommonStateContext);
export const useCommonDispatch = () => useContext(CommonDispatchContext);

export const CommonProvider = ({ children }) => {
    const [state, dispatch] = useReducer(commonReducer, initialState);

    // Persist state on each update
    // useEffect(() => {
    //     localStorage.setItem("users", JSON.stringify(state));
    // }, [state]);

    return (
        <CommonStateContext.Provider value={state}>
            <CommonDispatchContext.Provider value={dispatch}>
                {children}
            </CommonDispatchContext.Provider>
        </CommonStateContext.Provider>
    );
};
