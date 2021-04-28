import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const [user, setUser] = useState(null);
    const [value, setValue] = useState("");

    const { dispatch } = useContext(AuthContext);

    function handleLogin() {
        setUser({
            email: value,
            password: ""
        });
    }

    useEffect(() => {
        if (user) {
            dispatch({ type: "LOGIN", user: user });
        }
    }, [user]);

    return (
        <div>
            Login
            <div>
                <input
                    name="email"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default Login;