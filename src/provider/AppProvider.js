import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const ApplicationProvider = ({ children }) => {

    const [selectedNav, setSelectedNav] = useState(0)
    const [ selectedSubNav, setSelectedSubNav ] = useState(null)
    const [ userType, setUserType ] = useState(2)

    const functionSelectNav = (i) => {
        setSelectedNav(i)
        setSelectedSubNav(null)
    }

    const functionSelecSubtNav = (i) => {
        setSelectedSubNav(i)
    }

    useEffect(() => {

    }, []);

    return (
        <AppContext.Provider value={{
            selectedNav,
            functionSelectNav,
            functionSelecSubtNav,
            selectedSubNav,
            userType
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppData = () => {
    return useContext(AppContext);
};
