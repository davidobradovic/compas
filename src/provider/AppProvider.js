import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const ApplicationProvider = ({ children }) => {

    const [selectedNav, setSelectedNav] = useState(0)

    const functionSelectNav = (i) => {
        setSelectedNav(i)
    }

    useEffect(() => {

    }, []);

    return (
        <AppContext.Provider value={{
            selectedNav,
            functionSelectNav
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppData = () => {
    return useContext(AppContext);
};
