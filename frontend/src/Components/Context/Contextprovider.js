import React, { createContext, useState } from 'react'

export const Logincontext = createContext(null);

const Contextprovider = ({ children }) => {

    const [email, setEmail] = useState("hello");

    return (
        <>
            <Logincontext.Provider value={{ email, setEmail }}>
                {children}
            </Logincontext.Provider>
        </>
    )
}

export default Contextprovider;