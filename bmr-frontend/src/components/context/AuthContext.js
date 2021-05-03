import React, { useReducer } from "react";

export const AuthContext = React.createContext({});

const initialState = {
    user: null,
    isAuth: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "SUCCESSFUL-LOGIN":
            return {
                isAuth: true,
                user: 
                { email: action.user,
                },
            };
        case "LOGOUT":
            return {
                user: null,
                isAuth: false,
            };
        default:
            return initialState;
    }
}

function AuthContextComponent({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextComponent