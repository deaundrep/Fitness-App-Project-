import React, { useReducer } from "react";

export const AuthContext = React.createContext({});

const initialState = {
    isAuth: false,
};

function reducerFunc(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                isAuth: true,
            };
        case "LOGOUT":
            return {
                isAuth: false,
            };
        default:
            return state;
    }
}

function AuthContextComponent({ children }) {
    const [state, dispatch] = useReducer(reducerFunc, initialState);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContextComponent;