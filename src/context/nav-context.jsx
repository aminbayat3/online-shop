import { createContext, useState } from 'react';

export const NavContext = createContext({
    isOptionHovered: false,
    setIsOptionHovered: () => {},
});


export const NavProvider = ({children}) => {
    const [isOptionHovered, setIsOptionHovered] = useState(false);

    const value = {
        isOptionHovered,
        setIsOptionHovered,
    };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>
};