import React, { createContext } from "react";

export const rulesContext = createContext()

export default function RulesProvider({ children }) {
    return (
        <rulesContext.Provider>
            { children }
        </rulesContext.Provider>
    )
}